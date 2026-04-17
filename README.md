# Todo-app
# 📝 Advanced Todo Card (Stage 1a)

## 📌 Overview

This project is an enhanced version of the Stage 0 Todo Card. It introduces interactivity, state management, and improved accessibility, transforming a static UI into a more dynamic and app-like component.

The Todo Card now supports editing, status transitions, priority indicators, expandable content, and real-time time tracking.


Features Implemented

 Editable Content

* Users can edit:

  * Title
  * Description
  * Priority
  * Due date
* Save updates the UI instantly
* Cancel restores previous state

---

Status Control

* Status options:

  * Pending
  * In Progress
  * Done
* Checkbox and dropdown are synchronized:

  * Checking → sets status to Done
  * Changing status → updates checkbox
* Completed tasks show visual changes (e.g., strike-through)

---

 Priority Indicator

* Visual indicator changes based on priority:

  * High → Red
  * Medium → Orange
  * Low → Green

---

 Expand / Collapse Description

* Long descriptions are collapsible
* Toggle button:

  * "Show more" / "Show less"
* Accessible with:

  * `aria-expanded`
  * `aria-controls`

---

Time Management

* Dynamic time updates:

  * Due in X days/hours/minutes
  * Overdue by X hours
* If task is completed:

  * Displays **"Completed"**
* Due date set to end-of-day to avoid premature overdue states



 Accessibility Features

* Proper `<label for="">` usage for form inputs
* Keyboard navigable controls
* `aria-expanded` and `aria-controls` for collapsible content
* `aria-live="polite"` for time updates



Responsiveness

* Mobile-first design
* Works across:

  * 320px (mobile)
  * 768px (tablet)
  * 1024px+ (desktop)
* Edit form stacks on mobile and aligns better on larger screens

---

 State Management

The component uses a centralized `todo` object to manage:

* Title
* Description
* Priority
* Status
* Due date

All UI updates are synchronized through this state.



 What Changed from Stage 0

| Stage 0            | Stage 1                                 |
| ------------------ | --------------------------------------- |
| Static UI          | Interactive UI                          |
| No editing         | Full edit mode                          |
| Static status      | Dynamic status control                  |
| No time logic      | Real-time time tracking                 |
| No expand/collapse | Collapsible description                 |
| Basic UI           | Improved accessibility + responsiveness |




* Single todo card only (not a full app)
* No persistent storage (data resets on refresh)
* Time updates are triggered on interactions (not background intervals)

 Tech Stack

* HTML5 (semantic structure)
* CSS3 (responsive styling)
* Vanilla JavaScript (state + interactivity)
  
 Accessibility Notes
* All interactive elements are keyboard accessible
* Form inputs are properly labeled
* ARIA attributes used where necessary
* Focus behavior maintained during interactions

 Conclusion

This project demonstrates how a simple UI component can be enhanced with interactivity, accessibility, and state management to create a more realistic user experience.

