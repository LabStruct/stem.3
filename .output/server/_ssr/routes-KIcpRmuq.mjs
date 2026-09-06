import { r as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as stem3_cover_default } from "./router-B6N-3kmE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-KIcpRmuq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEM_3_default = "/assets/STEM.3-CAKfL5p_.pdf";
var stem3_pg_02_default = "/assets/stem3-pg-02-DuePIrhX.jpg";
var stem3_pg_03_default = "/assets/stem3-pg-03-C7sD7twq.jpg";
var stem3_pg_04_default = "/assets/stem3-pg-04-vpWGCWkK.jpg";
var stem3_pg_05_default = "/assets/stem3-pg-05-BIDVpx2d.jpg";
var PDF_SIZE_MB = "2.2";
var PDF_PAGES = 29;
var VERSION = "2.0";
var LAST_UPDATED = "July 2026";
function useReveal() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				e.target.classList.add("fade-up");
				io.unobserve(e.target);
			}
		}, {
			rootMargin: "0px 0px -10% 0px",
			threshold: .05
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return ref;
}
function Reveal({ children, as: Tag = "div", className = "" }) {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: `opacity-0 ${className}`,
		children
	});
}
var iconProps = {
	width: 22,
	height: 22,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.6,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
var Icons = {
	Motion: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...iconProps,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 17c3 0 3-10 6-10s3 10 6 10 3-10 6-10" })
	}),
	Electricity: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...iconProps,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13 3 5 14h6l-1 7 8-11h-6l1-7Z" })
	}),
	Aerospace: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...iconProps,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2c3 3 4 7 4 11l4 3-5 1-3 5-3-5-5-1 4-3c0-4 1-8 4-11Z" })
	}),
	Renewable: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...iconProps,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 10V3M12 14v7M14 12h7M10 12H3" })]
	}),
	Robotics: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...iconProps,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "5",
			y: "8",
			width: "14",
			height: "11",
			rx: "2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 8V4M9 4h6M9 13h.01M15 13h.01M3 13v3M21 13v3" })]
	}),
	Design: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...iconProps,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 21h18M6 21V9l6-6 6 6v12M10 21v-6h4v6" })
	}),
	Hand: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...iconProps,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 11V5a2 2 0 1 1 4 0v6M12 11V4a2 2 0 1 1 4 0v7M16 11V6a2 2 0 1 1 4 0v9a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-1l-2-3a1.5 1.5 0 0 1 2.5-1.6L8 12" })
	}),
	World: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...iconProps,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "9"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" })]
	}),
	Gift: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		...iconProps,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3",
			y: "8",
			width: "18",
			height: "13",
			rx: "1"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12h18M12 8v13M8 8a2.5 2.5 0 1 1 0-5c2 0 4 5 4 5s2-5 4-5a2.5 2.5 0 1 1 0 5" })]
	}),
	Download: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...iconProps,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3v13m0 0-5-5m5 5 5-5M5 21h14" })
	}),
	Arrow: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...iconProps,
		width: 16,
		height: 16,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14M13 6l6 6-6 6" })
	}),
	Chevron: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...iconProps,
		width: 18,
		height: 18,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 6l6 6-6 6" })
	}),
	ChevronL: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...iconProps,
		width: 18,
		height: 18,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 6l-6 6 6 6" })
	}),
	Check: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...iconProps,
		width: 16,
		height: 16,
		stroke: "#16a34a",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12l4 4L19 7" })
	}),
	Menu: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...iconProps,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7h16M4 12h16M4 17h16" })
	}),
	Close: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		...iconProps,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6l12 12M18 6L6 18" })
	})
};
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#top",
		className: `inline-flex items-center gap-1 text-[17px] font-bold tracking-tight ${className}`,
		"aria-label": "STEM.3 home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "STEM" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[#2563eb]",
			children: ".3"
		})]
	});
}
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const links = [
		{
			href: "#about",
			label: "About"
		},
		{
			href: "#inside",
			label: "Inside the Book"
		},
		{
			href: "#download",
			label: "Download"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 w-full border-b transition-colors ${scrolled ? "border-[#e5e5e5] bg-white/85 backdrop-blur" : "border-transparent bg-white"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex h-16 items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Primary",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm text-[#374151] transition-colors hover:text-[#111111]",
						children: l.label
					}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#download",
						className: "inline-flex h-9 items-center rounded-full bg-[#111111] px-4 text-sm font-medium text-white transition-colors hover:bg-black",
						children: "Get the book"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					className: "inline-flex h-10 w-10 items-center justify-center rounded-md text-[#111111] hover:bg-[#f7f7f5] md:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icons.Close, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icons.Menu, {})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-[#e5e5e5] bg-white md:hidden",
			"aria-label": "Mobile",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page flex flex-col py-3",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "py-3 text-[15px] text-[#111111]",
					children: l.label
				}, l.href))
			})
		})]
	});
}
function BookMockup() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative mx-auto w-full max-w-[420px]",
		style: { perspective: "1600px" },
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[3/4] w-full",
			style: {
				transformStyle: "preserve-3d",
				transform: "rotateY(-14deg)"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-6 -bottom-6 h-8 rounded-[50%] blur-2xl",
					style: { background: "rgba(17,17,17,0.18)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-y-0 left-[6px] w-[10px] rounded-r-sm bg-[#f2f2ef]",
					style: { boxShadow: "inset -1px 0 0 #e5e5e5" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-full w-full overflow-hidden rounded-[6px] bg-white ring-1 ring-[#e5e5e5]",
					style: { boxShadow: "0 30px 60px -20px rgba(17,17,17,0.25), 0 12px 24px -12px rgba(17,17,17,0.15)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: stem3_cover_default,
						alt: "STEM.3 textbook cover — Engineering + Physics",
						className: "h-full w-full object-cover",
						loading: "eager"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-y-0 left-0 w-3",
						style: { background: "linear-gradient(to right, rgba(0,0,0,0.10), rgba(0,0,0,0) 90%)" }
					})]
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-14 pb-16 pt-14 md:grid-cols-[1.05fr_.95fr] md:gap-16 md:pb-24 md:pt-20 lg:pt-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex w-fit items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-3 py-1 text-xs text-[#374151]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#16a34a]" }), "Free KS3 STEM textbook · UK"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 text-[2.5rem] font-bold leading-[1.05] tracking-tight text-[#111111] sm:text-5xl md:text-[3.5rem] lg:text-[4rem]",
						children: "Learn STEM through building, experimenting and engineering."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-[17px] leading-relaxed text-[#4b5563]",
						children: "A completely free KS3 STEM textbook designed to make physics and engineering enjoyable through real-world examples and hands-on activities."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: STEM_3_default,
							download: "STEM.3.pdf",
							className: "inline-flex h-12 items-center gap-2 rounded-full bg-[#2563eb] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#1d4ed8]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icons.Download, {}), "Download Free PDF"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#preview",
							className: "inline-flex h-12 items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-6 text-[15px] font-medium text-[#111111] transition-colors hover:bg-[#f7f7f5]",
							children: ["Preview Chapters", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icons.Arrow, {})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-sm text-[#6b6b6b]",
						children: [
							"PDF · ",
							PDF_SIZE_MB,
							" MB · ",
							PDF_PAGES,
							" pages · No signup required"
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center md:pl-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookMockup, {})
			})]
		})
	});
}
function SocialProof() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-[#e5e5e5] bg-[#f7f7f5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page grid gap-6 py-8 sm:grid-cols-2 md:grid-cols-4",
			children: [
				"Created by a UK National Finalist",
				"200+ hours of development",
				"Free forever",
				"Designed for KS3 learners"
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-2 text-sm text-[#374151]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icons.Check, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
			}, t))
		})
	});
}
var CHAPTERS = [
	{
		title: "Motion",
		desc: "Speed, forces and momentum — explained through vehicles, sport and everyday life.",
		Icon: Icons.Motion
	},
	{
		title: "Electricity",
		desc: "Circuits, current and voltage, built up from first principles and real experiments.",
		Icon: Icons.Electricity
	},
	{
		title: "Aerospace",
		desc: "How aircraft fly, how rockets escape gravity, and the physics behind flight.",
		Icon: Icons.Aerospace
	},
	{
		title: "Renewable Energy",
		desc: "Solar, wind and hydro — the engineering shaping a low-carbon future.",
		Icon: Icons.Renewable
	},
	{
		title: "Robotics",
		desc: "Sensors, actuators and control systems used in modern robotics.",
		Icon: Icons.Robotics
	},
	{
		title: "Engineering Design",
		desc: "The design process engineers use to solve real problems, from sketch to prototype.",
		Icon: Icons.Design
	}
];
function Inside() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inside",
		className: "container-page py-20 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-2xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-[#2563eb]",
					children: "What's inside"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-bold tracking-tight text-[#111111] md:text-4xl",
					children: "Six chapters covering the essentials of KS3 STEM."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[#4b5563]",
					children: "Grounded in real engineering, taught with clear language and hands-on activities."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: CHAPTERS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "group rounded-2xl border border-[#e5e5e5] bg-white p-6 transition-all duration-200 hover:-translate-y-[3px] hover:border-[#d4d4d4] hover:shadow-[0_10px_30px_-15px_rgba(17,17,17,0.15)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-11 w-11 items-center justify-center rounded-lg bg-[#f7f7f5] text-[#111111]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.Icon, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex items-baseline gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-medium text-[#6b6b6b]",
							children: ["Ch. ", String(i + 1).padStart(2, "0")]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-lg font-semibold text-[#111111]",
						children: c.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[14.5px] leading-relaxed text-[#4b5563]",
						children: c.desc
					})
				]
			}, c.title))
		})]
	});
}
function Why() {
	const items = [
		{
			Icon: Icons.World,
			title: "Real-world engineering",
			desc: "Every concept is anchored in something a student can see, touch, or build — from race cars to wind turbines."
		},
		{
			Icon: Icons.Hand,
			title: "Hands-on experiments",
			desc: "Practical activities you can run at home or in a classroom, using accessible materials."
		},
		{
			Icon: Icons.Gift,
			title: "Completely free",
			desc: "No signup, no paywall, no advertisements. Written to be shared with any KS3 student in Wales."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "bg-[#f7f7f5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-[#2563eb]",
					children: "Why STEM.3"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-bold tracking-tight text-[#111111] md:text-4xl",
					children: "Built to make STEM feel real."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-10 md:grid-cols-3",
				children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-11 w-11 items-center justify-center rounded-lg bg-white ring-1 ring-[#e5e5e5]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.Icon, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 text-lg font-semibold text-[#111111]",
						children: it.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-sm text-[15px] leading-relaxed text-[#4b5563]",
						children: it.desc
					})
				] }, it.title))
			})]
		})
	});
}
function Preview() {
	const pages = [
		{
			url: stem3_cover_default,
			label: "Cover"
		},
		{
			url: stem3_pg_02_default,
			label: "Page 2"
		},
		{
			url: stem3_pg_03_default,
			label: "Page 3"
		},
		{
			url: stem3_pg_04_default,
			label: "Page 4"
		},
		{
			url: stem3_pg_05_default,
			label: "Page 5"
		}
	];
	const [i, setI] = (0, import_react.useState)(0);
	const total = pages.length;
	const go = (n) => setI((n + total) % total);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "preview",
		className: "container-page py-20 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-2xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-[#2563eb]",
					children: "Preview"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl font-bold tracking-tight text-[#111111] md:text-4xl",
					children: "Flip through the first pages."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[#4b5563]",
					children: "A short sample of what's inside — including the cover and opening chapter."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-2xl border border-[#e5e5e5] bg-[#f7f7f5]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex aspect-[4/3] w-full items-center justify-center p-6 sm:p-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: pages[i].url,
								alt: `STEM.3 ${pages[i].label}`,
								loading: "lazy",
								className: "max-h-full max-w-full rounded-md bg-white shadow-[0_20px_50px_-20px_rgba(17,17,17,0.25)] ring-1 ring-[#e5e5e5]"
							}, pages[i].url)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go(i - 1),
							"aria-label": "Previous page",
							className: "absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#111111] shadow-sm transition-colors hover:bg-[#f7f7f5]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icons.ChevronL, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go(i + 1),
							"aria-label": "Next page",
							className: "absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#111111] shadow-sm transition-colors hover:bg-[#f7f7f5]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icons.Chevron, {})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between text-sm text-[#6b6b6b]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						pages[i].label,
						" · ",
						i + 1,
						" / ",
						total
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1.5",
						children: pages.map((_, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setI(n),
							"aria-label": `Go to page ${n + 1}`,
							className: `h-1.5 rounded-full transition-all ${n === i ? "w-6 bg-[#111111]" : "w-1.5 bg-[#d4d4d4]"}`
						}, n))
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: STEM_3_default,
					download: "STEM.3.pdf",
					className: "inline-flex h-12 items-center gap-2 rounded-full bg-[#2563eb] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#1d4ed8]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icons.Download, {}), "Download the full book"]
				})
			})]
		})]
	});
}
function Download() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "download",
		className: "border-t border-[#e5e5e5] bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl font-bold tracking-tight text-[#111111] md:text-5xl",
						children: "Download STEM.3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg text-[#4b5563]",
						children: "No signup. No payment. No advertisements. Just free STEM education."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-col items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: STEM_3_default,
							download: "STEM.3.pdf",
							className: "inline-flex h-14 items-center gap-2.5 rounded-full bg-[#2563eb] px-8 text-base font-medium text-white transition-colors hover:bg-[#1d4ed8]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icons.Download, {}), "Download PDF"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[#6b6b6b]",
							children: "Free forever · No account required"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#e5e5e5] text-left sm:grid-cols-4",
						children: [
							["Size", `${PDF_SIZE_MB} MB`],
							["Pages", `${PDF_PAGES}`],
							["Version", VERSION],
							["Updated", LAST_UPDATED]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs font-medium uppercase tracking-wide text-[#6b6b6b]",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-[15px] font-semibold text-[#111111]",
								children: v
							})]
						}, k))
					})
				]
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-[#e5e5e5] bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-8 md:flex-row md:items-start md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-[#6b6b6b]",
						children: "Making STEM education freely accessible."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Footer",
					className: "grid grid-cols-2 gap-x-12 gap-y-2 text-sm sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#about",
							className: "text-[#374151] transition-colors hover:text-[#111111]",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#inside",
							className: "text-[#374151] transition-colors hover:text-[#111111]",
							children: "Inside the Book"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#download",
							className: "text-[#374151] transition-colors hover:text-[#111111]",
							children: "Download"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:hello@stem3.example",
							className: "text-[#374151] transition-colors hover:text-[#111111]",
							children: "Email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "text-[#374151] transition-colors hover:text-[#111111]",
							children: "Privacy"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col justify-between gap-2 border-t border-[#e5e5e5] pt-6 text-xs text-[#6b6b6b] sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" STEM.3 · All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Free forever." })]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main",
			className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[#111111] focus:px-3 focus:py-2 focus:text-sm focus:text-white",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialProof, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inside, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preview, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Home as component };
