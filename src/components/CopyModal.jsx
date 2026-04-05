import { motion } from "framer-motion";

import { modalDisplay, overlayFade } from "../utils/Animations.js";

function CopyModal() {
  return (
    <motion.div
      className="modal-container no-shadow flex-center"
      variants={overlayFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="modal copy-modal flex-center"
        initial="hidden"
        animate="visible"
        variants={modalDisplay}
      >
        <h3 className="text-med">Copied!</h3>
      </motion.div>
    </motion.div>
  );
}

export default CopyModal;
