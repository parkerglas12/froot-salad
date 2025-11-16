import { motion } from "framer-motion";

import { fadeIn } from "../utils/Animations.js";

function CopyModal() {
  return (
    <div className="modal-container no-shadow flex-center">
      <motion.div
        className="modal copy-modal flex-center"
        exit="exit"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-med">Copied!</h2>
      </motion.div>
    </div>
  );
}

export default CopyModal;
