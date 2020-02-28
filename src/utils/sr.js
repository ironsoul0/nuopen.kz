import ScrollReveal from "scrollreveal";

// const isSSR = typeof window === "undefined";

// const sr = typeof window !== "undefined" && ScrollReveal();

// eslint-disable-next-line import/no-mutable-exports
let sr = null;

try {
  sr = ScrollReveal();
} catch (err) {
  sr = null;
}

export default sr;
