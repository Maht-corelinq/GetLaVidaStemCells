"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, PhoneCall, PhoneIncoming, Mic, MicOff } from "lucide-react";
import { RetellWebClient } from "retell-client-js-sdk";
import { cn } from "@/lib/utils";

type WidgetView = "closed" | "menu" | "calling" | "callback" | "callback-sent";

export default function VoiceAgentWidget() {
  const [view, setView] = useState<WidgetView>("closed");
  const [callStatus, setCallStatus] = useState<"connecting" | "active" | "ended">("connecting");
  const [isMuted, setIsMuted] = useState(false);
  const [callbackPhone, setCallbackPhone] = useState("");
  const [callbackName, setCallbackName] = useState("");
  const [callbackLoading, setCallbackLoading] = useState(false);
  const [callbackError, setCallbackError] = useState<string | null>(null);
  const retellRef = useRef<RetellWebClient | null>(null);

  const endCall = useCallback(() => {
    if (retellRef.current) {
      retellRef.current.stopCall();
      retellRef.current = null;
    }
    setCallStatus("ended");
    setTimeout(() => setView("closed"), 1500);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (retellRef.current) {
        retellRef.current.stopCall();
      }
    };
  }, []);

  async function startWebCall() {
    setView("calling");
    setCallStatus("connecting");

    try {
      // Get access token from our API
      const res = await fetch("/api/retell/web-call", { method: "POST" });
      if (!res.ok) throw new Error("Failed to create call");
      const { access_token } = await res.json();

      // Initialize Retell WebRTC
      const client = new RetellWebClient();
      retellRef.current = client;

      client.on("call_started", () => setCallStatus("active"));
      client.on("call_ended", () => endCall());
      client.on("error", () => endCall());

      await client.startCall({ accessToken: access_token });
    } catch {
      setCallStatus("ended");
      setTimeout(() => setView("menu"), 1500);
    }
  }

  function toggleMute() {
    if (!retellRef.current) return;
    if (isMuted) {
      retellRef.current.unmute();
    } else {
      retellRef.current.mute();
    }
    setIsMuted(!isMuted);
  }

  async function requestCallback() {
    setCallbackLoading(true);
    setCallbackError(null);

    try {
      const res = await fetch("/api/retell/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: callbackPhone, name: callbackName }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to request callback");
      }

      setView("callback-sent");
    } catch (err) {
      setCallbackError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setCallbackLoading(false);
    }
  }

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {view === "closed" && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setView("menu")}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-coral text-white shadow-lg shadow-coral/30 transition-colors hover:bg-coral-dark cursor-pointer"
            aria-label="Talk to Sarah, our AI assistant"
          >
            <Phone className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Widget panel */}
      <AnimatePresence>
        {view !== "closed" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.19, 1, 0.22, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[340px] rounded-2xl bg-white shadow-2xl shadow-black/15 border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-ocean-deepest px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-coral/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-coral" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-cream">Sarah</p>
                  <p className="text-xs text-cream-muted">La Vida AI Assistant</p>
                </div>
              </div>
              <button
                onClick={() => {
                  if (view === "calling") endCall();
                  setView("closed");
                }}
                className="text-cream/50 hover:text-cream transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Menu view */}
            {view === "menu" && (
              <div className="p-5 space-y-3">
                <p className="text-sm text-gray-600 mb-4">
                  Hi! I&apos;m Sarah. I can answer questions about our stem cell treatments, pricing, and process.
                </p>

                <button
                  onClick={startWebCall}
                  className="w-full flex items-center gap-3 rounded-xl border border-gray-200 p-4 text-left transition-all hover:border-coral hover:bg-coral/5 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center shrink-0">
                    <PhoneCall className="h-5 w-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ocean-deepest">Talk Now</p>
                    <p className="text-xs text-gray-500">Speak with Sarah live in your browser</p>
                  </div>
                </button>

                <button
                  onClick={() => setView("callback")}
                  className="w-full flex items-center gap-3 rounded-xl border border-gray-200 p-4 text-left transition-all hover:border-coral hover:bg-coral/5 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-seafoam/10 flex items-center justify-center shrink-0">
                    <PhoneIncoming className="h-5 w-5 text-seafoam-dark" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ocean-deepest">Request a Callback</p>
                    <p className="text-xs text-gray-500">Sarah will call you for a qualification chat</p>
                  </div>
                </button>
              </div>
            )}

            {/* Active call view */}
            {view === "calling" && (
              <div className="p-5 text-center">
                {/* Pulsing indicator */}
                <div className="relative mx-auto w-20 h-20 mb-4">
                  {callStatus === "active" && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-coral/20"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <div className={cn(
                    "relative w-20 h-20 rounded-full flex items-center justify-center",
                    callStatus === "connecting" ? "bg-gray-100" : callStatus === "active" ? "bg-coral/10" : "bg-gray-100"
                  )}>
                    <Phone className={cn(
                      "h-8 w-8",
                      callStatus === "active" ? "text-coral" : "text-gray-400"
                    )} />
                  </div>
                </div>

                <p className="text-sm font-semibold text-ocean-deepest">
                  {callStatus === "connecting" && "Connecting to Sarah..."}
                  {callStatus === "active" && "Speaking with Sarah"}
                  {callStatus === "ended" && "Call ended"}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {callStatus === "active" && "Ask about treatments, pricing, or next steps"}
                </p>

                {callStatus === "active" && (
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                      onClick={toggleMute}
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer",
                        isMuted ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      )}
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={endCall}
                      className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
                      aria-label="End call"
                    >
                      <Phone className="h-5 w-5 rotate-[135deg]" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Callback form */}
            {view === "callback" && (
              <div className="p-5">
                <p className="text-sm text-gray-600 mb-4">
                  Enter your number and Sarah will call you to discuss your treatment options.
                </p>

                <div className="space-y-3">
                  <input
                    type="text"
                    value={callbackName}
                    onChange={(e) => setCallbackName(e.target.value)}
                    placeholder="Your name (optional)"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                  />
                  <input
                    type="tel"
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    placeholder="Phone number"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                  />

                  {callbackError && (
                    <p className="text-xs text-red-600">{callbackError}</p>
                  )}

                  <button
                    onClick={requestCallback}
                    disabled={!callbackPhone || callbackLoading}
                    className="w-full py-2.5 rounded-lg bg-coral text-white text-sm font-semibold transition-colors hover:bg-coral-dark disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {callbackLoading ? "Requesting..." : "Call Me"}
                  </button>

                  <button
                    onClick={() => setView("menu")}
                    className="w-full text-xs text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  >
                    Back to options
                  </button>
                </div>
              </div>
            )}

            {/* Callback confirmation */}
            {view === "callback-sent" && (
              <div className="p-5 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-seafoam/20">
                  <PhoneIncoming className="h-6 w-6 text-seafoam-dark" />
                </div>
                <p className="text-sm font-semibold text-ocean-deepest">Callback Requested!</p>
                <p className="text-xs text-gray-500 mt-1">
                  Sarah will call you shortly at {callbackPhone}
                </p>
                <button
                  onClick={() => {
                    setView("closed");
                    setCallbackPhone("");
                    setCallbackName("");
                  }}
                  className="mt-4 text-xs text-coral hover:text-coral-dark transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
