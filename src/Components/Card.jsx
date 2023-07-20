import React from "react";
import CardAvatar from "./CardAvatar";
import CardContent from "./CardContent";

export default function Card() {
  return (
    <div className="card">
      <CardAvatar />
      <CardContent />
    </div>
  );
}
