import ScrollReveal from "scrollreveal";

// const isSSR = typeof window === "undefined";
const sr = window ? ScrollReveal() : null;

export default sr;
