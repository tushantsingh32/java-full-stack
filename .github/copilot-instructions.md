# Copilot Instructions — repo-specific guidance

Purpose
- Be pragmatic: this repository is a collection of standalone learning/examples (Java sources, HTML pages, CSS, small C/C++ examples), not a single compiled product. Prioritize minimal, non-destructive edits and preserve file names.

Big picture
- Major areas: `java/` (source + generated Javadoc artifacts), `html5/` (static examples), `css/` and `PRACTICE/` (styles and playgrounds), `DSA/` (algorithm examples). There is no centralized build system or package manager.
- Many files are self-contained examples; changes should avoid cross-file refactors unless the user requests consolidation.

Key files & patterns
- `java/`: Java examples and doc output. Javadoc-style structure found under `java/resource-files/` and `java/script-files/` — treat these as generated documentation assets.
- `html5/` and `PRACTICE/`: static HTML examples. Use lightweight local serving (e.g., VSCode Live Server) for previews.
- `css/task/styles.css` and `css/task/flex.html`: UI/CSS exercises — changes should keep visual intent intact.

Build / run / debug shortcuts
- C/C++: use the included VS Code task labeled "C/C++: gcc.exe build active file" or run MinGW manually: `C:\MinGW\bin\gcc.exe -g <file> -o <out>.exe`.
- Java: compile example files with `javac java/*.java` and run with `java -cp java <MainClass>`; for Javadoc regeneration: `javadoc -d out java/*.java`.
- HTML/CSS/JS: preview with Live Server or open files in the browser.

Repository conventions to follow
- Do not rename or move files with non-standard names (e.g., `ONE.HTML`, `second3.html`) — consumer expectations and links may depend on those names.
- Keep edits focused and minimal: many examples are used for instruction and visual inspection rather than unit-tested behavior.
- When adding new code, include a tiny README or comment at file top describing purpose and how to run.

Integration points & external deps
- There are no external package manifests. External tools expected: JDK (javac/java/javadoc), MinGW (gcc), and a browser or Live Server for HTML.

How to suggest changes in PRs
- Small, focused PRs: update one example or folder at a time.
- If changing Java code that affects documentation, include regenerated docs or note the javadoc command to run.

Examples (how to act)
- Fix a typo in `html5/second.html`: edit the file and include a screenshot or test instructions if it affects layout.
- Add a new Java example: place source in `java/`, include a short note in the file and a one-line `README.md` in the same folder explaining how to compile/run.

If unclear
- Ask the user which example(s) are authoritative before broad refactors. When in doubt, prefer non-breaking edits and request permission for large structural changes.

End of file
