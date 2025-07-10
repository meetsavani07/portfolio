{
  /* Outer rotating ring */
}
<motion.div
  className="absolute inset-0 rounded-full border-2 border-purple-500/30"
  animate={{ rotate: 360 }}
  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  style={{
    width: "calc(100% + 40px)",
    height: "calc(100% + 40px)",
    left: "-20px",
    top: "-20px",
  }}
/>;

{
  /* Middle rotating ring - opposite direction */
}
<motion.div
  className="absolute inset-0 rounded-full border-2 border-pink-500/40 border-dashed"
  animate={{ rotate: -360 }}
  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
  style={{
    width: "calc(100% + 60px)",
    height: "calc(100% + 60px)",
    left: "-30px",
    top: "-30px",
  }}
/>;

{
  /* Outer pulsing glow */
}
<motion.div
  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl"
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
  }}
  transition={{
    repeat: Infinity,
    duration: 4,
    ease: "easeInOut",
  }}
  style={{
    width: "calc(100% + 80px)",
    height: "calc(100% + 80px)",
    left: "-40px",
    top: "-40px",
  }}
/>;

{
  /* Breathing effect background */
}
<motion.div
  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10"
  animate={{
    scale: [1, 1.05, 1],
  }}
  transition={{
    repeat: Infinity,
    duration: 3,
    ease: "easeInOut",
  }}
/>;
