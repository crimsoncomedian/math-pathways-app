// Module titles (for page headings)
export const MODULE_TITLES = {
  M1: 'Foundational Skills',
  M2: 'Equations & Inequalities',
  M3: 'Functions',
  M4: 'Polynomials',
};

// Five canonical questions per module.
// Keep IDs stable — reused across Rank, Confidence, Q1, and Q2.
export const MODULE_QUESTIONS = {
  // =============== M1 — Foundational Skills ===============
  M1: [
    { id: 'M1_Easy',        difficulty: 'Easy',        label: 'Simplify $3y + 5y - 2$.' },
    { id: 'M1_Basic',       difficulty: 'Basic',       label: 'Evaluate $m^2 - \\dfrac{12}{m}$, when $m = 4$.' },
    { id: 'M1_Moderate',    difficulty: 'Moderate',    label: 'You earn $35$ per hour tutoring. You already have $540$ in your savings. Write an expression for your total money after $h$ hours.' },
    { id: 'M1_Challenging', difficulty: 'Challenging', label: 'Simplify $4x - 2(3x - 1) + 5$.' },
    { id: 'M1_Advanced',    difficulty: 'Advanced',    label: 'Write $4(a-2)$ with no multiplication.' },
  ],

  // ======== M2 — Equations & Inequalities ========
  M2: [
    { id: 'M2_Easy',        difficulty: 'Easy',        label: 'Solve for $v$: $v + 6 = 13$.' },
    { id: 'M2_Basic',       difficulty: 'Basic',       label: 'Write the inequality using $n$ as the variable: a number is at least $10$.' },
    { id: 'M2_Moderate',    difficulty: 'Moderate',    label: 'Solve for $p$: $p - 7 = 4p + 9$.' },
    { id: 'M2_Challenging', difficulty: 'Challenging', label: 'Solve for $x$: $\\dfrac{x - 2}{5} = 3x$.' },
    { id: 'M2_Advanced',    difficulty: 'Advanced',    label: 'Why do you reverse the inequality when you multiply or divide by a negative?' },
  ],

  // ================== M3 — Functions ==================
  M3: [
    { id: 'M3_Easy',        difficulty: 'Easy',        label: 'List the domain of the function: $\\{(-2, 5), (0, 1), (3, 8), (4, -1)\\}$.' },
    { id: 'M3_Basic',       difficulty: 'Basic',       label: 'A function is defined as $g(x) = 3x - 2$. What value of $x$ makes $g(x) = 10$?' },
    { id: 'M3_Moderate',    difficulty: 'Moderate',    label: 'The relation includes the points: $\\{(1,2), (3,4), (8,b), (7,-5)\\}$. Choose a value for $b$ that would make this relation not a function.' },
    { id: 'M3_Challenging', difficulty: 'Challenging', label: 'A ride-share app charges passengers using the function: $C(d) = 2.25d + 3.75$, where $C(d)$ is the total cost (in dollars) of a trip that covers $d$ miles. Explain what the slope means in this context.' },
    { id: 'M3_Advanced',    difficulty: 'Advanced',    label: 'Give a real-world example of two inputs giving the same output from a function.' },
  ],

  // ================ M4 — Polynomials ================
  M4: [
    { id: 'M4_Easy',        difficulty: 'Easy',        label: 'Identify the degree of the polynomial: $4x^3 + 2x^2 - 7x + 6$.' },
    { id: 'M4_Basic',       difficulty: 'Basic',       label: 'Multiply $(x + 2)(x - 5)$.' },
    { id: 'M4_Moderate',    difficulty: 'Moderate',    label: 'How would changing the value of $3$ to a negative number in $f(x) = 3x^2 + 5x + 1$ affect the graph?' },
    { id: 'M4_Challenging', difficulty: 'Challenging', label: 'Factor $6x^2 + 11x + 3$.' },
    { id: 'M4_Advanced',    difficulty: 'Advanced',    label: 'Name any factor of the polynomial $x^3 + x^2 - 14x - 24$.' },
  ],
};

export const DIFFICULTY_ORDER = ['Easy', 'Basic', 'Moderate', 'Challenging', 'Advanced'];
