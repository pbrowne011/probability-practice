## Short-term tasks
  * [x] Add basic CSS styling to the site
  * [x] Render LaTeX questions & answers
  * [ ] Add functionality to render user input as LaTeX
    * [ ] https://docs.mathjax.org/en/latest/web/typeset.html#typesetting-user-supplied-content
  * [ ] Help page for basic LaTeX syntax, links to more advanced syntax
  * [ ] Add "Hide Answer" button to replace "Show Answer" when clicked
  * [ ] Host on the subdomain probability.patbrowne.com using Cloudflare Pages
    * [ ] Set up CI/CD for hosting

## Longer-term priorities
  * [ ] Use dependency (TBD which one) for converting LaTeX to numbers (for
        answer checking)
    * [ ] https://arthanzel.github.io/evaluatex/
    * [ ] https://latex.js.org/
  * [ ] Optimize load/render times of LaTeX (for question/answer rendering and
        user display (clicking outside the input box)
  * [ ] Good error handling for invalid LaTeX from user
  * [ ] Investigate whether you can render whole site in LaTeX (MathJax font
        specifically)
  * [ ] Add support for questions with non-numeric answers
  * [ ] Add more questions to `questions.json`
    * [ ] See if there are LaTeX sources that exist, or convert existing
          problems from PDF/other file formats to LaTeX (OCR, other software)
    * [ ] https://mathpix.com/pricing/all
    * [ ] Type up problems from textbooks (last resort)
  * [ ] Create system for question organization (different sources, problem
        topic tags, file structure of JSON, etc.)
    * [ ] Decide if one large JSON file is the correct strategy going forward
  * [ ] Add user logins to store info per user
    * [ ] Add heatmap graph for users (would be cool!)
