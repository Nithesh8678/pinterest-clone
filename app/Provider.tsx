"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

function Provider({ children }: any) {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}

export default Provider;
