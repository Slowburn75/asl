async (page) => {
    const outputDir =
        "/Users/obedovabor/Projects/asl_payroll/asl-web-app/output/playwright";

    const targets = [
        {
            slug: "error-free-payroll-calculation",
            route: "/payroll/cycles",
        },
        {
            slug: "payroll-records",
            route: "/payroll/summary",
        },
        {
            slug: "realtime-calculations",
            route: "/calculator/formulae",
        },
        {
            slug: "automatically-generated-payslip",
            route: "/payroll/summary/payslip",
        },
        {
            slug: "flexible-workflow",
            route: "/settings/workflows",
        },
        {
            slug: "advanced-payroll-reporting",
            route: "/reports/salary-reconciliation",
        },
        {
            slug: "employee-loans",
            route: "/loan/summary",
        },
        {
            slug: "audit-trail-misc",
            route: "/roles",
        },
    ];

    const sanitizeVisibleData = ({ route }) => {
        const demoNames = [
            "Ada Morgan",
            "Tunde Reed",
            "Mira Cole",
            "Noah Stone",
            "Ivy Blake",
            "Lena Frost",
            "Owen Grant",
            "Nora Vale",
            "Evan Cross",
            "Maya Quinn",
        ];
        const routeNameValues = {
            "/payroll/cycles": [
                "MONTHLY PAYROLL 2026",
                "MONTHLY PAYROLL 2025",
                "MONTHLY PAYROLL 2024",
                "MONTHLY PAYROLL 2023",
                "MONTHLY PAYROLL 2022",
                "SEPTEMBER PAYROLL 2022",
            ],
            "/calculator/formulae": [
                "Basic Pay Formula",
                "Taxable Income Formula",
                "Net Pay Formula",
                "Allowance Formula",
                "Deduction Formula",
            ],
            "/settings/workflows": [
                "Monthly Payroll Approval",
                "Finance Review Flow",
                "Payslip Release Flow",
            ],
            "/roles": [
                "Payroll Administrator",
                "Finance Reviewer",
                "Report Viewer",
                "Employee Manager",
            ],
        };

        const knownReplacements = [
            [/LANDOVER COMPANY LIMITED/gi, "Demo Company Limited"],
            [/LANDOVER/gi, "DemoCo"],
            [/Bayo Adetipe/gi, "Demo Payroll Admin"],
            [/developers@aslbusinesssolutions\.com/gi, "demo.admin@example.test"],
        ];

        const applyReplacements = (value) => {
            if (!value) return value;
            let next = value;
            for (const [pattern, replacement] of knownReplacements) {
                next = next.replace(pattern, replacement);
            }
            next = next.replace(
                /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi,
                "demo.user@example.test",
            );
            return next;
        };

        const leafTextNodes = [];
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    const text = node.nodeValue || "";
                    if (!text.trim()) return NodeFilter.FILTER_REJECT;
                    const parent = node.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;
                    if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                },
            },
        );

        while (walker.nextNode()) {
            leafTextNodes.push(walker.currentNode);
        }

        for (const node of leafTextNodes) {
            node.nodeValue = applyReplacements(node.nodeValue || "");
        }

        document.querySelectorAll("input, textarea").forEach((field, index) => {
            if (!("value" in field)) return;
            const type = (field.getAttribute("type") || "").toLowerCase();
            const name = `${field.getAttribute("name") || ""} ${field.getAttribute("placeholder") || ""}`.toLowerCase();
            if (type === "email" || name.includes("email")) {
                field.value = `demo.user${index + 1}@example.test`;
            } else {
                field.value = applyReplacements(field.value || "");
            }
        });

        document.querySelectorAll("img").forEach((img) => {
            img.alt = applyReplacements(img.alt || "");
            const alt = img.alt.toLowerCase();
            if (alt.includes("demo company") || alt.includes("demo payroll")) {
                img.removeAttribute("srcset");
                img.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' rx='20' fill='%232185d0'/%3E%3Ctext x='48' y='56' font-family='Arial' font-size='24' text-anchor='middle' fill='white' font-weight='700'%3ED%3C/text%3E%3C/svg%3E";
            }
        });

        document.querySelectorAll("table").forEach((table) => {
            const headers = Array.from(table.querySelectorAll("thead th")).map(
                (header) => header.textContent?.trim().toLowerCase() || "",
            );
            table.querySelectorAll("tbody tr").forEach((row, rowIndex) => {
                if (row.children.length < Math.max(2, headers.length)) {
                    return;
                }
                Array.from(row.children).forEach((cell, cellIndex) => {
                    if (cell.getAttribute("colspan")) return;
                    const header = headers[cellIndex] || "";
                    const privateColumn =
                        header.includes("employee") ||
                        header.includes("full name") ||
                        header.includes("email") ||
                        header.includes("company") ||
                        header.includes("user");
                    const routeNameColumn =
                        header === "name" && routeNameValues[route]?.length;

                    if (!privateColumn && !routeNameColumn) return;

                    let replacement = demoNames[rowIndex % demoNames.length];
                    if (header.includes("email")) {
                        replacement = `demo.user${rowIndex + 1}@example.test`;
                    } else if (routeNameColumn) {
                        replacement =
                            routeNameValues[route][
                                rowIndex % routeNameValues[route].length
                            ];
                    }

                    const innerWalker = document.createTreeWalker(
                        cell,
                        NodeFilter.SHOW_TEXT,
                    );
                    const nodes = [];
                    while (innerWalker.nextNode()) nodes.push(innerWalker.currentNode);
                    if (nodes.length === 0) {
                        cell.textContent = replacement;
                    } else {
                        nodes[0].nodeValue = replacement;
                        nodes.slice(1).forEach((node) => {
                            node.nodeValue = "";
                        });
                    }
                });
            });
        });
    };

    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto("http://localhost:3006/dashboard", {
        waitUntil: "domcontentloaded",
    });
    await page.waitForTimeout(900);

    if (page.url().includes("/auth/sign-in")) {
        throw new Error(
            "The browser is not authenticated. Log into the real app and rerun this script.",
        );
    }

    const written = [];

    for (const mode of ["light", "dark"]) {
        await page.evaluate((theme) => {
            localStorage.setItem("theme", theme);
        }, mode);

        for (const target of targets) {
            await page.goto(`http://localhost:3006${target.route}`, {
                waitUntil: "domcontentloaded",
            });
            await page.waitForTimeout(4500);
            await page.evaluate(sanitizeVisibleData, { route: target.route });
            await page.evaluate(() => window.scrollTo(0, 0));
            await page.waitForTimeout(150);
            const path = `${outputDir}/${target.slug}-${mode}.png`;
            await page.screenshot({ path, fullPage: false });
            written.push(path);
        }
    }

    return written;
}
