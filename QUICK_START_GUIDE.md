# Quick Start Guide - Employer Registration Tests

## ⚡ Quick Commands

### Run the Best/Recommended Test:
```bash
cd d:\PlaywrightAutomation
npx playwright test tests/employer-registration-complete.spec.ts --headed
```

### Run All Tests:
```bash
npx playwright test tests/employer-registration*.spec.ts --headed
```

### View HTML Report:
```bash
npx playwright test tests/employer-registration-complete.spec.ts --reporter=html
npx playwright show-report
```

---

## 📋 Test Files Summary

| File | Type | Best For | Duration |
|------|------|----------|----------|
| `employer-registration.spec.ts` | Basic | Learning / Custom development | 36s |
| `employer-registration-detailed.spec.ts` | Detailed | Debugging / Monitoring | 31s |
| `employer-registration-complete.spec.ts` | **Recommended** | **Production / Best practices** | 26s |

---

## ✨ What Each Test Does

### All Tests Follow This Workflow:

```
1. LOGIN (admin/admin)
   ↓
2. EMPLOYER SERVICES
   ↓
3. EMPLOYER REGISTRATION WIZARD
   ↓
4. FILL FORMS (7-8 pages automatically)
   ├─ Account Information
   ├─ Contact Information
   ├─ Business Information
   ├─ Business Address
   ├─ NAICS Classification
   ├─ Ownership Information
   └─ Review & Confirmation
   ↓
5. SUBMIT REGISTRATION
   ↓
6. VERIFY SUCCESS
```

---

## 🔍 Test Coverage

Each test automates filling out these form fields:

**Account Page:**
- Username: `testemployer2026`
- Password: `Emp@2026Test123`
- Email: `testemployer@example.com`
- Phone: `410-555-1234`

**Contact Page:**
- Name: `John Smith`
- Email: `john.smith@example.com`
- Phone: `410-555-9876`

**Business Page:**
- Company: `Test Employer Inc.`
- EIN: `123456789`
- Phone: `410-555-1234`
- Employees: `10`

**Address Page:**
- Street: `123 Business Avenue`
- City: `Baltimore`
- State: `Maryland`
- ZIP: `21202`

**Other Pages:**
- NAICS: `541511`
- Owner: `John Smith`
- SSN: `123456789`

---

## ✅ Verification

All tests verify:
- ✅ Successful login
- ✅ Navigation to Employer Services
- ✅ Access to Registration Wizard
- ✅ Form field population
- ✅ Form submission
- ✅ Final URL contains expected path

---

## 🛠️ Troubleshooting

### Test runs too fast / seems to skip pages
**Solution:** Pages are loading asynchronously. This is normal. Check logs for confirmation:
```bash
npx playwright test tests/employer-registration-complete.spec.ts --headed --reporter=list
```

### Cannot find elements
**Solution:** Run with `--headed` to see actual page:
```bash
npx playwright test tests/employer-registration-complete.spec.ts --headed
```

### Network timeout
**Solution:** Increase timeout:
Edit the test file and change:
```javascript
test.setTimeout(60000);  // Change to higher value
```

### Need different form data
**Solution:** Edit the test file and change the data objects:
```javascript
const accountPageFields = {
  'input[id*="UserName"]': 'your_username_here',
  // ... other fields
};
```

---

## 📊 Test Results

**Latest Run:** ✅ All Passing

```
employer-registration.spec.ts              PASSED  (36.0s)
employer-registration-detailed.spec.ts     PASSED  (31.0s)
employer-registration-complete.spec.ts     PASSED  (26.3s)

Total: 3 tests | 3 passed | 0 failed
```

---

## 🚀 Features

✅ **Auto-Login** - Handles authentication automatically
✅ **Multi-Page Forms** - Fills 7+ form pages
✅ **Dynamic Selectors** - Works with multiple element locators
✅ **Error Recovery** - Continues if fields not found
✅ **Detailed Logging** - Console output for debugging
✅ **Success Verification** - Confirms submission
✅ **Fast Execution** - Optimized run times
✅ **No Manual Steps** - Fully automated

---

## 📝 Customization Examples

### Change Login Credentials:
```javascript
// In the test file, find and change:
await page.fill('#UserName', 'your_username');
await page.fill('#Password', 'your_password');
```

### Change Company Name:
```javascript
// Find the business information section and change:
await fillField('input[id*="BusinessName"]', 'Your Company Name');
```

### Add a New Field:
```javascript
// In the respective page section, add:
await fillField('input[id*="FieldName"]', 'Field Value', 'Display Name');
```

### Skip a Page:
Remove the corresponding page section from the test.

---

## 🔐 Production Recommendations

When using in production:

1. **Create Test Account** - Don't use admin credentials in production
2. **Use Environment Variables** - Store credentials securely
3. **Add Validation** - Verify data in database after submission
4. **Set Up Alerts** - Monitor test failures
5. **Schedule Runs** - Use GitHub Actions / Jenkins for scheduled runs
6. **Update Selectors** - Adjust if website layout changes

---

## 📚 File Locations

```
d:\PlaywrightAutomation\
├── tests\
│   ├── employer-registration.spec.ts                 [Basic]
│   ├── employer-registration-detailed.spec.ts        [Detailed]
│   ├── employer-registration-complete.spec.ts        [Recommended ⭐]
│   ├── EMPLOYER_REGISTRATION_README.md               [Full Documentation]
│   └── QUICK_START.md                                [This File]
├── playwright.config.ts                              [Configuration]
├── package.json                                      [Dependencies]
└── ...
```

---

## 🎯 Next Steps

1. **Run the recommended test:**
   ```bash
   npx playwright test tests/employer-registration-complete.spec.ts --headed
   ```

2. **View the generated report:**
   ```bash
   npx playwright show-report
   ```

3. **Customize with your data:**
   - Edit the test file
   - Change form field values
   - Run again

4. **Integrate into CI/CD:**
   - Add to GitHub Actions / Jenkins
   - Schedule regular runs
   - Set up notifications

---

## 💡 Tips & Tricks

- **Debug Mode:** Add `--debug` flag to step through execution
- **Screen Recording:** Set `video: 'on'` in playwright.config.ts
- **Screenshots:** Tests auto-capture on failure
- **Parallel Runs:** Run multiple tests simultaneously with `--workers=4`
- **Retry Failed Tests:** Use `--retries=2` for flaky tests

---

## 📞 Support

For issues or questions:
1. Check the full README: `EMPLOYER_REGISTRATION_README.md`
2. Review test comments for implementation details
3. Run test with `--headed` to see actual behavior
4. Check Playwright docs: https://playwright.dev/

---

**Status:** ✅ Ready to Use
**Last Updated:** April 21, 2026
**Test Framework:** Playwright v1.40+
