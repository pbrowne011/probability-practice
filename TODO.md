## Short-term tasks
  * [x] Add basic CSS styling to the site
  * [ ] Render LaTeX questions & answers
  * [ ] Add functionality to render user input as LaTeX
  * [ ] Add "Hide Answer" button to replace "Show Answer" when clicked
  * [ ] Include "Computer Modern" font somehow to unify fonts on page
  * [ ] Host on the subdomain probability.patbrowne.com using Cloudflare Pages
    * [ ] Set up CI/CD for hosting

## Longer-term priorities
  * [ ] Use dependency (TBD which one) for converting LaTeX to numbers (for
        answer checking)
  * [ ] Optimize load/render times of LaTeX (for question/answer rendering and
        user display (clicking outside the input box)
  * [ ] Good error handling for invalid LaTeX from user
  * [ ] Help page for basic LaTeX syntax, links to more advanced syntax
  * [ ] Add support for questions with non-numeric answers
  * [ ] Add more questions to `questions.json`
    * [ ] See if there are LaTeX sources that exist, or convert existing
          problems from PDF/other file formats to LaTeX (OCR, other software)
    * [ ] Type up problems from textbooks (last resort)
  * [ ] Create system for question organization (different sources, problem
        topic tags, file structure of JSON, etc.)
    * [ ] Decide if one large JSON file is the correct strategy going forward
  * [ ] Add user logins to store info per user
    * [ ] Add heatmap graph for users (would be cool!)
