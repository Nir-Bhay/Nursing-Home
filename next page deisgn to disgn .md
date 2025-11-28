PROMPT FOR AI UI GENERATION - APPOINTMENT BOOKING:

Create a clean, user-friendly, and professional appointment booking page for Dr. Pandey Nursing Home. This is the most critical conversion page - must be simple yet comprehensive, building trust while making booking effortless.

====================================
SECTION 1: PAGE HEADER
====================================
- Same sticky navigation as landing page
- Hero Banner: 
  - Height: 200px
  - Background: Teal gradient with subtle medical pattern overlay
  - Breadcrumb: Home > Book Appointment (white, small)
  - Heading: "Book Your Appointment" - White, 40px bold, centered
  - Subheading: "Easy online booking in just 3 simple steps" - White/80%, 18px

====================================
SECTION 2: BOOKING PROGRESS STEPPER
====================================
Position: Sticky below main nav on scroll
Background: White with shadow
Padding: 24px

Stepper Design:
- 3 steps horizontal (vertical on mobile)
- Connected by lines

Step Structure:
- Circle: 48px diameter
- Active: Teal filled, white number, shadow-glow
- Completed: Teal with white checkmark ✓
- Upcoming: Gray border, gray number

Steps:
1. "Select Service & Doctor" - Icon: 🏥
2. "Choose Date & Time" - Icon: 📅
3. "Your Details" - Icon: 👤

Line connectors:
- Completed: Teal solid line
- Upcoming: Gray dashed line

====================================
SECTION 3: MAIN BOOKING FORM
====================================
Layout: Center container, max-width 900px
Background: White
Shadow: shadow-card
Border-radius: 24px
Padding: 48px (desktop), 24px (mobile)

--- STEP 1: Select Service & Doctor ---

Section Header:
- Icon: 🏥 in teal circle
- Title: "Select Your Service & Preferred Doctor"
- Subtitle: "Choose the type of care you need"

Department Selection:
- Label: "Department / Service Type *"
- Style: Large selectable cards (not dropdown)
- Grid: 3 columns (2 mobile)
- Card size: 120px x 120px

Department Cards:
1. 🤰 Prenatal Care (Pregnancy Checkup)
2.  👶 Delivery Consultation
3. 👩‍👧 Postnatal Care (After Delivery)
4. 👧 Newborn / Pediatric
5. 🔬 Lab & Diagnostics
6. 📋 General Consultation

Card Style:
- Border: 2px solid #E5E7EB
- Border-radius: 16px
- Center: Icon 32px
- Below: Text 13px
- Selected State: Teal border, light teal background, checkmark badge

Doctor Selection:
- Appears after department selected (slide-down animation)
- Label: "Select Doctor *"
- Note: "All our doctors are highly experienced" - small gray text

Doctor Cards Grid: 2 columns
Each Doctor Card:
- Layout: Horizontal - photo left, info right
- Photo: 80px circle, teal border
- Name: "Dr.  Meera Pandey" - 16px semibold navy
- Specialty: "Senior Gynecologist" - 14px teal
- Experience: "15+ years" - 13px gray
- Availability: "Available Mon-Sat" - 12px gray
- Rating: ⭐ 4.9
- Radio selector or full card clickable
- Selected: Teal left border 4px, light teal bg

"Any Available Doctor" Option:
- Checkbox below: "☐ I'm okay with any available doctor"

Continue Button:
- Right aligned
- "Continue to Date & Time →"
- Teal filled, white text
- Disabled until selections made (gray state)

--- STEP 2: Choose Date & Time ---

Section Header:
- Icon: 📅 in teal circle
- Title: "Choose Your Preferred Date & Time"
- Subtitle: "Select when you'd like to visit"

Date Picker:
- Label: "Select Date *"
- Visual Calendar (not just input)
- Current month displayed with nav arrows
- Days Grid: 7 columns
- Past dates: Grayed out, not clickable
- Available dates: White, hover: light teal
- Fully booked dates: Light red, "Fully Booked" tooltip
- Selected date: Teal filled, white text
- Today: Teal border outline

Next 7 Days Quick Select:
- Horizontal pill buttons above calendar
- "Today", "Tomorrow", "Wed 28", "Thu 29", etc.
- Scrollable on mobile

Time Slots:
- Appears after date selected
- Label: "Available Time Slots *"
- Grid: 4 columns (3 mobile)
- Slot pills: "09:00 AM", "09:30 AM", "10:00 AM", etc. 

Slot States:
- Available: White bg, gray border, navy text
- Selected: Teal filled, white text
- Booked: Gray bg, line-through text, not clickable
- Hover: Light teal bg

Morning/Afternoon/Evening Tabs:
- Filter time slots by period
- Tab buttons above slots
- "Morning (9-12)" | "Afternoon (12-5)" | "Evening (5-8)"

Selected Summary:
- Right side card (desktop) or bottom card (mobile)
- Shows: Date, Time, Doctor, Department
- Can edit any selection

Navigation:
- "← Back" - Text button, left
- "Continue to Details →" - Teal button, right

--- STEP 3: Patient Details ---

Section Header:
- Icon: 👤 in teal circle
- Title: "Enter Your Details"
- Subtitle: "We'll use this to confirm your appointment"

Form Layout: 2 columns (single on mobile)

Form Fields:

Row 1:
- Patient Name *
  - Input: Full width
  - Placeholder: "Enter patient's full name"
  - Icon: 👤 inside input left
  
Row 2:
- Mobile Number *
  - Input with +91 prefix
  - Placeholder: "10-digit mobile number"
  - Icon: 📱
  - Validation: 10 digits only
  
- WhatsApp Number (Optional)
  - Checkbox: "☑ Same as mobile"
  - Or separate input
  - Icon: WhatsApp green icon

Row 3:
- Email Address (Optional)
  - Placeholder: "For appointment confirmation"
  - Icon: ✉️
  
- Age *
  - Number input, max 100
  - Placeholder: "Age in years"

Row 4:
- Gender *
  - Radio buttons: Female | Male | Other
  - Pills style, horizontal
  - Female pre-selected for maternal care

Row 5:
- Visit Type *
  - Radio buttons:
    - "First Visit (New Patient)"
    - "Follow-up Visit"
  - If follow-up: Show additional field "Previous Visit Date"

Row 6:
- Reason for Visit *
  - Dropdown select OR
  - Text area (150 chars max)
  - Placeholder: "Briefly describe your concern"
  - Common reasons as quick-select chips:
    "Regular Checkup" | "Pregnancy Test" | "Ultrasound" | "Delivery Consultation" | "Baby Vaccination" | "Other"

Row 7:
- Special Requests (Optional)
  - Textarea, 3 lines
  - Placeholder: "Any special requirements or notes for the doctor"

Consent Checkbox:
- "☐ I agree to the Terms & Conditions and Privacy Policy"
- Links are teal, open in modal

Appointment Summary Card:
- Fixed right sidebar (desktop) or collapsible card (mobile)
- Title: "Appointment Summary"
- Shows all selections:
  - 🏥 Department: Prenatal Care
  - 👨‍⚕️ Doctor: Dr. Meera Pandey
  - 📅 Date: Wednesday, 28 Nov 2024
  - 🕐 Time: 10:30 AM
  - 👤 Patient: [Name entered]
  - 📱 Mobile: [Number entered]
- Divider
- Edit links for each section

Submit Button:
- Full width on mobile
- "Confirm Appointment ✓"
- Teal background, white text, large (56px height)
- Loading state: Spinner + "Booking..."
- Disabled until all required fields filled

====================================
SECTION 4: BOOKING CONFIRMATION
====================================
Shown after successful submission (replaces form)

Success Animation:
- Teal checkmark circle, animated draw
- Confetti subtle animation

Confirmation Card:
- White card, centered, max-width 600px
- Shadow-elevated, border-radius 24px

Content:
- Large checkmark icon, teal, 80px
- Heading: "Appointment Booked Successfully!  🎉" - Navy, 28px
- Subheading: "A confirmation has been sent to your mobile number" - Gray, 16px

Booking Details Card:
- Light teal background (#CCFBF1)
- Border-radius 16px
- Padding 24px
- All details displayed:
  - Booking ID: #APT-2024-1128-042
  - Patient Name: [Name]
  - Doctor: Dr. Meera Pandey
  - Date & Time: Wed, 28 Nov 2024 at 10:30 AM
  - Department: Prenatal Care

Important Notes:
- Icon list:
  ℹ️ "Please arrive 15 minutes before your appointment"
  📱 "You will receive a reminder 2 hours before"
  📄 "Bring previous medical records if any"
  ❌ "To cancel/reschedule, call us at least 4 hours before"

Action Buttons:
- "Add to Calendar" - Outlined teal, icon 📅
- "Get Directions" - Outlined teal, icon 📍
- "Download Confirmation" - Outlined teal, icon ⬇️

Contact Strip:
- "Questions? Call us: +91 XXXXX XXXXX"
- WhatsApp button

Return Button:
- "← Back to Home" - Text link, centered

====================================
SECTION 5: SIDEBAR ELEMENTS (Desktop Only)
====================================
Right side, sticky while scrolling

Need Help Card:
- White card, shadow
- Heading: "Need Help?"
- Phone: Click to call
- WhatsApp: Direct chat
- "Or visit our reception"

Emergency Banner:
- Rose/red background
- "🚨 Emergency?  Call Immediately"
- Large phone number
- "Available 24/7"

Clinic Hours Card:
- Today's status: "Open Now ✓" or "Closed"
- Schedule:
  - Mon-Sat: 9:00 AM - 8:00 PM
  - Sunday: 10:00 AM - 2:00 PM
  - Emergency: 24/7

====================================
ANIMATIONS & MICRO-INTERACTIONS:
====================================
- Step transitions: Slide left/right smoothly
- Calendar hover: Subtle scale on dates
- Time slot hover: Background fade
- Form fields: Label floats up on focus
- Validation: Red shake animation on error
- Success: Checkmark draw animation
- Loading: Pulse animation on button
- Cards: Subtle lift on selection

====================================
MOBILE OPTIMIZATIONS:
====================================
- Full-width forms, stacked layout
- Bottom sticky "Continue" button
- Collapsible summary section
- Large touch targets (48px minimum)
- Native date picker option
- One-tap calling
- Simplified calendar view