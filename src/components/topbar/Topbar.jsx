import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Artag Admin shop</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4aa68f80-158e-4744-95e9-da53a23e1eba/dasli0e-0189993a-d23c-4825-a6fc-aa0403374080.png/v1/fill/w_894,h_894,strp/random_avatar_by_fragtoons_dasli0e-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzRhYTY4ZjgwLTE1OGUtNDc0NC05NWU5LWRhNTNhMjNlMWViYVwvZGFzbGkwZS0wMTg5OTkzYS1kMjNjLTQ4MjUtYTZmYy1hYTA0MDMzNzQwODAucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.rXIypKi4Jrvn0oSV6EXW3-W8SPF6kiyLjrQxH-3Gwjc" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
