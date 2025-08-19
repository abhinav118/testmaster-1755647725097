export const siteData = {
  "users": [
    {
      "id": 1,
      "name": "John Smith",
      "email": "john.smith@email.com",
      "role": "student",
      "avatar": "JS",
      "joinDate": "2024-01-10"
    },
    {
      "id": 2,
      "name": "Emma Johnson",
      "email": "emma.johnson@email.com",
      "role": "student",
      "avatar": "EJ",
      "joinDate": "2024-01-08"
    },
    {
      "id": 3,
      "name": "Dr. Sarah Wilson",
      "email": "sarah.wilson@email.com",
      "role": "teacher",
      "avatar": "SW",
      "joinDate": "2024-01-01"
    }
  ],
  "tests": [
    {
      "id": 1,
      "name": "Mathematics Quiz 1",
      "subject": "Mathematics",
      "description": "Basic algebra and geometry concepts",
      "duration": 30,
      "questions": 25,
      "passingScore": 70,
      "created": "2024-01-15",
      "status": "active",
      "createdBy": 3
    },
    {
      "id": 2,
      "name": "Science Test",
      "subject": "Science",
      "description": "Physics and chemistry fundamentals",
      "duration": 45,
      "questions": 30,
      "passingScore": 75,
      "created": "2024-01-14",
      "status": "draft",
      "createdBy": 3
    }
  ],
  "results": [
    {
      "id": 1,
      "testId": 1,
      "studentId": 1,
      "score": 88,
      "totalQuestions": 25,
      "correctAnswers": 22,
      "timeTaken": 25,
      "completedAt": "2024-01-20T10:30:00Z",
      "status": "completed"
    },
    {
      "id": 2,
      "testId": 2,
      "studentId": 2,
      "score": 94,
      "totalQuestions": 30,
      "correctAnswers": 28,
      "timeTaken": 28,
      "completedAt": "2024-01-19T14:15:00Z",
      "status": "completed"
    }
  ],
  "settings": {
    "appName": "TestMaster",
    "description": "A comprehensive testing and quiz management platform for educators and students",
    "version": "1.0.0",
    "siteName": "TestMaster",
    "timezone": "UTC",
    "defaultTestDuration": 60,
    "defaultPassingScore": 70,
    "theme": "auto",
    "emailNotifications": true,
    "autoGrading": true
  }
};

export const navigation = {
  "main": [
    {
      "label": "Dashboard",
      "route": "/",
      "icon": "home"
    },
    {
      "label": "Tests",
      "route": "/tests",
      "icon": "clipboard-list"
    },
    {
      "label": "Create Test",
      "route": "/create-test",
      "icon": "plus-circle"
    },
    {
      "label": "Students",
      "route": "/students",
      "icon": "users"
    },
    {
      "label": "Results",
      "route": "/results",
      "icon": "chart-bar"
    },
    {
      "label": "Settings",
      "route": "/settings",
      "icon": "cog"
    }
  ],
  "footer": [
    {
      "label": "Privacy Policy",
      "route": "/privacy"
    },
    {
      "label": "Terms of Service",
      "route": "/terms"
    },
    {
      "label": "Support",
      "route": "/support"
    }
  ]
};