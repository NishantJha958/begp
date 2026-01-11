"""
Enhanced Database Setup Script with Email Testing
Run this after configuring email in app.py
"""

import requests
import json

API_URL = "http://127.0.0.1:5000"

# Test officials with REAL email addresses for testing
officials = [
    {
        "username": "water.admin@gov.in",
        "password": "water123",
        "govt_id": "WATER001",
        "name": "Rajesh Kumar",
        "department": "Water_Supply_Dept",
        "email": "rekhagudiajha@gmail.com",  # ⬅️ CHANGE TO YOUR TEST EMAIL
        "phone": "9876543210"
    },
    {
        "username": "roads.admin@gov.in",
        "password": "roads123",
        "govt_id": "ROADS001",
        "name": "Priya Sharma",
        "department": "Public_Works_Dept",
        "email": "priya.sharma@example.com",  # ⬅️ CHANGE TO YOUR TEST EMAIL
        "phone": "9876543211"
    },
    {
        "username": "admin@gov.in",
        "password": "admin123",
        "govt_id": "ADMIN001",
        "name": "Admin Officer",
        "department": "General_Admin_Dept",
        "email": "admin@example.com",  # ⬅️ CHANGE TO YOUR TEST EMAIL
        "phone": "9876543212"
    },
    {
        "username": "health.officer@gov.in",
        "password": "health123",
        "govt_id": "HEALTH001",
        "name": "Dr. Anjali Verma",
        "department": "Health_Dept",
        "email": "anjali.verma@example.com",  # ⬅️ CHANGE TO YOUR TEST EMAIL
        "phone": "9876543213"
    },
    {
        "username": "sanitation@gov.in",
        "password": "clean123",
        "govt_id": "SANIT001",
        "name": "Ramesh Patil",
        "department": "Sanitation_Dept",
        "email": "ramesh.patil@example.com",  # ⬅️ CHANGE TO YOUR TEST EMAIL
        "phone": "9876543214"
    },
    {
        "username": "power.dept@gov.in",
        "password": "power123",
        "govt_id": "POWER001",
        "name": "Suresh Reddy",
        "department": "Power_Dept",
        "email": "suresh.reddy@example.com",  # ⬅️ CHANGE TO YOUR TEST EMAIL
        "phone": "9876543215"
    }
]

def print_header(text):
    print("\n" + "=" * 70)
    print(f"  {text}")
    print("=" * 70)

def test_server_connection():
    """Check if Flask server is running"""
    try:
        response = requests.get(f"{API_URL}/api/complaints", timeout=2)
        return True
    except requests.exceptions.ConnectionError:
        return False
    except:
        return True  # Other errors mean server is running

def test_email_configuration(test_email):
    """Test if email sending is configured and working"""
    try:
        print("\n📧 Testing email configuration...")
        response = requests.post(
            f"{API_URL}/api/test_email",
            json={"email": test_email},
            timeout=10
        )
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success'):
                print(f"✅ Email sent successfully to {test_email}")
                print("   Check your inbox (and spam folder)!")
                return True
            else:
                print(f"❌ Email test failed: {data.get('message')}")
                return False
        else:
            print(f"❌ Email test failed with status {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Email test error: {str(e)}")
        return False

def add_officials():
    """Add test officials to database"""
    success_count = 0
    failed_count = 0
    
    print("\n📝 Adding test officials to database...")
    
    for official in officials:
        try:
            response = requests.post(
                f"{API_URL}/api/add_official",
                json=official,
                headers={'Content-Type': 'application/json'},
                timeout=5
            )
            
            if response.status_code == 200:
                print(f"✅ Added: {official['name']} ({official['department']})")
                success_count += 1
            else:
                error_msg = response.json().get('message', 'Unknown error')
                if 'already exists' in error_msg.lower():
                    print(f"⚠️  Already exists: {official['name']}")
                else:
                    print(f"❌ Failed: {official['name']} - {error_msg}")
                failed_count += 1
        
        except Exception as e:
            print(f"❌ Error adding {official['name']}: {str(e)}")
            failed_count += 1
    
    return success_count, failed_count

def print_credentials():
    """Print login credentials for testing"""
    print_header("🔑 LOGIN CREDENTIALS FOR TESTING")
    
    for i, official in enumerate(officials, 1):
        print(f"\n{i}. {official['name']}")
        print(f"   👤 Username: {official['username']}")
        print(f"   🔒 Password: {official['password']}")
        print(f"   🆔 Govt ID: {official['govt_id']}")
        print(f"   🏢 Department: {official['department'].replace('_', ' ')}")
        print(f"   📧 Email: {official['email']}")

def print_email_setup_instructions():
    """Print instructions for email configuration"""
    print_header("⚠️  EMAIL NOT CONFIGURED")
    
    print("""
📧 TO ENABLE REAL EMAIL NOTIFICATIONS:

1. Open app.py and find EMAIL_CONFIG section (around line 33)

2. For Gmail:
   - Enable 2-Factor Authentication
   - Generate App Password: https://myaccount.google.com/apppasswords
   - Update these values:
     
     EMAIL_CONFIG = {
         'SMTP_SERVER': 'smtp.gmail.com',
         'SMTP_PORT': 587,
         'SENDER_EMAIL': 'your.email@gmail.com',  # ⬅️ YOUR GMAIL
         'SENDER_PASSWORD': 'xxxx xxxx xxxx xxxx',  # ⬅️ APP PASSWORD
         'SENDER_NAME': 'E-Grievance System'
     }

3. Restart Flask server: python app.py

4. Run this setup again to test emails

📖 Full instructions: Read EMAIL_SETUP_GUIDE.md
    """)

def print_test_workflow():
    """Print testing workflow instructions"""
    print_header("🧪 TESTING WORKFLOW")
    
    print("""
STEP 1: Test Citizen Submission with Email
   1. Go to http://127.0.0.1:5000
   2. Click "Citizen Portal"
   3. Fill form with YOUR email address
   4. Submit complaint
   5. Check your email for confirmation! 📧

STEP 2: Test Official Notification
   1. Go to http://127.0.0.1:5000/official.html
   2. Login with any official credentials above
   3. Check that official's email for new complaint notification 📧

STEP 3: Test Status Update
   1. As official, click "Take Action" on complaint
   2. Change status or mark as resolved
   3. Check citizen's email for status update! 📧

STEP 4: Test Complaint Forwarding
   1. As official, select "Forward to Another Dept"
   2. Choose different department
   3. Login as that department's official
   4. Check their email for forwarded complaint! 📧

WHAT YOU SHOULD SEE IN EMAILS:
   ✅ Beautiful HTML emails (not plain text!)
   ✅ AI analysis results included
   ✅ Color-coded priority badges
   ✅ SLA deadline information
   ✅ Direct links to take action
   ✅ Professional government-style formatting
    """)

def main():
    print_header("🚀 E-GRIEVANCE ENHANCED SETUP WITH EMAIL")
    
    # Check server
    print("\n🔍 Checking if Flask server is running...")
    if not test_server_connection():
        print("\n❌ ERROR: Cannot connect to Flask server!")
        print("\n🔴 Please start the server first:")
        print("   python app.py")
        print("\n   Then run this setup script again.")
        return
    
    print("✅ Server is running!")
    
    # Email configuration check
    print("\n" + "="*70)
    print("  📧 EMAIL CONFIGURATION CHECK")
    print("="*70)
    
    test_email = input("\nEnter YOUR email address to test email system: ").strip()
    
    if not test_email or '@' not in test_email:
        print("\n⚠️  Invalid email address. Skipping email test.")
        email_working = False
    else:
        email_working = test_email_configuration(test_email)
    
    if not email_working:
        print_email_setup_instructions()
        
        proceed = input("\n❓ Continue with setup anyway? (y/n): ").strip().lower()
        if proceed != 'y':
            print("\n👋 Setup cancelled. Configure email and try again!")
            return
    
    # Add officials
    print("\n" + "="*70)
    print("  👥 ADDING TEST OFFICIALS")
    print("="*70)
    
    success, failed = add_officials()
    
    # Summary
    print_header("📊 SETUP SUMMARY")
    print(f"\n✅ Officials Added: {success}")
    print(f"⚠️  Failed/Skipped: {failed}")
    print(f"📧 Email Status: {'✅ WORKING!' if email_working else '❌ NOT CONFIGURED'}")
    
    # Print credentials
    if success > 0:
        print_credentials()
    
    # Testing instructions
    print_test_workflow()
    
    # Final message
    print_header("✨ SETUP COMPLETE!")
    
    if email_working:
        print("""
🎉 YOUR E-GRIEVANCE SYSTEM IS FULLY OPERATIONAL!

✅ Database configured
✅ Test officials added
✅ Email notifications working

🚀 READY FOR DEMO/HACKATHON!

💡 DEMO TIPS:
   - Show real emails being sent
   - Highlight AI analysis in emails
   - Demonstrate complete workflow
   - Show beautiful email templates
   - Mention it works with any SMTP server
        """)
    else:
        print("""
⚠️  SYSTEM RUNNING (Email notifications disabled)

✅ Database configured
✅ Test officials added
❌ Email notifications not configured

📧 To enable emails: Follow instructions in EMAIL_SETUP_GUIDE.md
        """)
    
    print("\n🌐 Access Points:")
    print(f"   Citizen Portal:  {API_URL}")
    print(f"   Official Portal: {API_URL}/official.html")
    print("\n" + "="*70 + "\n")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n👋 Setup interrupted by user.")
    except Exception as e:
        print(f"\n\n❌ Unexpected error: {str(e)}")
        print("Please check if the Flask server is running.")