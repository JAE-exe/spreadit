"use client";
import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
const CollaborativeRoom = ({ children }: { children: ReactNode }) => {
  return (
    <RoomProvider id="my-room">
      <ClientSideSuspense fallback={<Loader />}>
        <div>
          <Header>
            <div className="flex w-fit items-center justify-center gap-2">
              <p className="document-title">Share</p>
            </div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
