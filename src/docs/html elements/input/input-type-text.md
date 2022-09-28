---
links:
    - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
cssSelector: 'input[type="text"]'
ideas:
    - "Should this really be free text? If additional validation is added to check it is a 'number' or a 'date' then there are actual domain types for that."
    - "Check the associated attributes e.g. required, maxlength are they correct?"
    - "Try a range of invalid characters"
    - "What happens if this is left blank?"
---

# `type="text"`

Text input fields are often a source of issues when used for non-text data. There are many types available e.g. date, time, number, and these specialised types offer some input validation. "text" offers no default input validation, although it should remove new-line characters. This means that if 'text' is used, the system validation needs to handle any input. There are additional attributes that can help provide client side validation e.g. pattern, required etc.

Test input fields often have javascript events associated like 'onchange' so check the event listeners to make sure you test the JavaScript.

## Useful Links

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types

## CSS Selector

`input[type="text"]`

## Test Ideas

- Should this really be free text? If additional validation is added to check it is a 'number' or a 'date' then there are actual domain types for that.
- Check the associated attributes e.g. required, maxlength are they correct?
- Try a range of invalid characters
- What happens if this is left blank?


