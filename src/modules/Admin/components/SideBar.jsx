import React from "react";
import { motion } from "framer-motion";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="main-container">
      <motion.div initial={{ width: "200px" }} className="sidebar">
      </motion.div>
    </div>
  );
};

export default SideBar;
