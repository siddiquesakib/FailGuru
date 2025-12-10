src/
├── assets/
│   └── images/
│
├── Component/
│   ├── Home/
│   │   ├── Slider.jsx
│   │   ├── FeaturedLessons.jsx          ❌ CREATE
│   │   ├── WhyLearningMatters.jsx       ❌ CREATE
│   │   ├── TopContributors.jsx          ❌ CREATE
│   │   └── MostSavedLessons.jsx         ❌ CREATE
│   │
│   ├── Shared/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx               ✅ EXISTS (needs dropdown)
│   │   │   └── UserDropdown.jsx         ❌ CREATE
│   │   ├── Footer.jsx                   ✅ EXISTS
│   │   ├── Container.jsx                ✅ EXISTS
│   │   ├── LoadingSpinner.jsx           ✅ EXISTS
│   │   └── LoadingSkeleton.jsx          ❌ CREATE
│   │
│   ├── Lessons/
│   │   ├── LessonCard.jsx               ❌ CREATE (reusable)
│   │   ├── LikeButton.jsx               ❌ CREATE
│   │   ├── FavoriteButton.jsx           ❌ CREATE
│   │   ├── ReportModal.jsx              ❌ CREATE
│   │   ├── CommentSection.jsx           ❌ CREATE
│   │   ├── SimilarLessons.jsx           ❌ CREATE
│   │   └── Pagination.jsx               ❌ CREATE
│   │
│   ├── Dashboard/
│   │   ├── DashboardStats.jsx           ❌ CREATE
│   │   ├── LessonTable.jsx              ❌ CREATE
│   │   ├── EditLessonModal.jsx          ❌ CREATE
│   │   └── StatsChart.jsx               ❌ CREATE
│   │
│   └── Admin/
│       ├── UsersTable.jsx               ❌ CREATE
│       ├── LessonsTable.jsx             ❌ CREATE
│       ├── ReportsTable.jsx             ❌ CREATE
│       └── AdminStatsCards.jsx          ❌ CREATE
│
├── Context/
│   ├── AuthContext.jsx                  ✅ EXISTS
│   └── AuthProvider.jsx                 ✅ EXISTS
│
├── hooks/
│   ├── useAuth.jsx                      ✅ EXISTS
│   ├── useAdmin.jsx                     ❌ CREATE
│   └── usePremium.jsx                   ❌ CREATE
│
├── Layouts/
│   ├── HomeLayouts.jsx                  ✅ EXISTS
│   ├── AuthLayout.jsx                   ✅ EXISTS
│   ├── DashboardLayout.jsx              ✅ EXISTS
│   └── AdminLayout.jsx                  ❌ CREATE
│
├── Pages/
│   ├── Home/
│   │   └── Home.jsx                     ✅ EXISTS (needs sections)
│   │
│   ├── Auth/
│   │   ├── Login.jsx                    ✅ EXISTS
│   │   └── Register.jsx                 ✅ EXISTS
│   │
│   ├── Lessons/
│   │   ├── PublicLessons.jsx            ✅ EXISTS (needs pagination)
│   │   └── PublicLessonDetails.jsx      ✅ EXISTS (needs interactions)
│   │
│   ├── Payment/
│   │   ├── Pricing.jsx                  ✅ EXISTS
│   │   ├── PaymentSuccess.jsx           ✅ EXISTS
│   │   └── PaymentCancel.jsx            ❌ CREATE
│   │
│   ├── Dashboard/
│   │   ├── DashboardHome.jsx            ❌ CREATE
│   │   ├── Profile.jsx                  ✅ EXISTS
│   │   ├── AddLesson.jsx                ✅ EXISTS
│   │   ├── MyLessons.jsx                ✅ EXISTS (needs edit modal)
│   │   └── MyFavorites.jsx              ❌ CREATE (or incomplete)
│   │
│   ├── Admin/
│   │   ├── AdminDashboard.jsx           ❌ CREATE
│   │   ├── ManageUsers.jsx              ❌ CREATE
│   │   ├── ManageLessons.jsx            ❌ CREATE
│   │   └── ReportedLessons.jsx          ❌ CREATE
│   │
│   └── Error/
│       └── NotFound.jsx                 ❌ CREATE
│
├── Routes/
│   ├── Routes.jsx                       ✅ EXISTS
│   ├── PrivateRoute.jsx                 ✅ EXISTS
│   └── AdminRoute.jsx                   ❌ CREATE
│
├── firebase/
│   └── firebase.config.js               ✅ EXISTS
│
├── App.jsx                              ✅ EXISTS
├── main.jsx                             ✅ EXISTS
└── index.css                            ✅ EXISTS




src/
├── Layouts/
│   └── DashboardLayout.jsx          ⚠️ UPDATE - Add sidebar with role-based menu
│
├── Component/
│   └── Dashboard/
│       └── DashboardSidebar.jsx     ❌ CREATE - Sidebar with conditional admin links
│
├── Pages/
│   └── Dashboard/
│       ├── UserDashboard.jsx        ❌ CREATE - Main stats page
│       ├── Profile.jsx              ✅ EXISTS
│       ├── AddLesson.jsx            ✅ EXISTS
│       ├── MyLessons.jsx            ✅ EXISTS
│       ├── MyFavorites.jsx          ❌ CREATE
│       │
│       │  # Admin Pages (same folder, but protected)
│       ├── AdminDashboard.jsx       ❌ CREATE
│       ├── ManageUsers.jsx          ❌ CREATE
│       ├── ManageLessons.jsx        ❌ CREATE
│       └── ReportedLessons.jsx      ❌ CREATE
│
├── Routes/
│   ├── Routes.jsx                   ⚠️ UPDATE
│   ├── PrivateRoute.jsx             ✅ EXISTS
│   └── AdminRoute.jsx               ❌ CREATE
│
└── hooks/
    ├── useAuth.jsx                  ✅ EXISTS
    └── useAdmin.jsx                 ❌ CREATE



// Single Dashboard - User & Admin both use this
{
  path: "dashboard",
  element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
  children: [
    // ========== COMMON (User + Admin both) ==========
    { index: true, element: <UserDashboard /> },
    { path: "profile", element: <Profile /> },
    { path: "add-lesson", element: <AddLesson /> },
    { path: "my-lessons", element: <MyLessons /> },
    { path: "my-favorites", element: <MyFavorites /> },
    
    // ========== ADMIN ONLY ==========
    { path: "admin", element: <AdminRoute><AdminDashboard /></AdminRoute> },
    { path: "manage-users", element: <AdminRoute><ManageUsers /></AdminRoute> },
    { path: "manage-lessons", element: <AdminRoute><ManageLessons /></AdminRoute> },
    { path: "reported-lessons", element: <AdminRoute><ReportedLessons /></AdminRoute> },
  ]
}