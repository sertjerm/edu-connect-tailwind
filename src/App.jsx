// src/App.jsx
import React, { useState, useEffect } from "react";
import {
  BarChart3,
  GraduationCap,
  BookOpen,
  Upload,
  Search,
  Users,
  Clock,
  Calendar,
  FileText,
} from "lucide-react";

// Components
import Sidebar from "./components/common/Sidebar";
import GlassCard from "./components/common/GlassCard";
import StatsCard from "./components/dashboard/StatsCard";
import ActionButton from "./components/common/ActionButton";
import PlatformInfo from "./components/common/PlatformInfo";

// Pages
import LoginPage from "./pages/LoginPage";

// Data
import {
  dashboardStats,
  subjects,
  lessons,
  userRoles,
} from "./data/mockData";

// Utils
import { getTimeGreeting } from "./utils/helpers";

// Styles
import "./App.scss";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("ทั้งหมด");
  const [greeting, setGreeting] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setGreeting(getTimeGreeting());
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      
      // Auto close sidebar on mobile when page changes
      if (mobile && currentPage) {
        setIsSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [currentPage]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Dashboard Page
  const DashboardPage = () => (
    <div className="page-content">
      {/* Header */}
      <div className="page-header">
        <div className="page-header__title">
          <BarChart3 className="w-8 h-8 animate-float" />
          <h1 className="page-header__heading">สถิติการใช้งาน</h1>
        </div>
        <p className="page-header__subtitle">
          {greeting} ยินดีต้อนรับสู่ EduConnect
        </p>
      </div>

      {/* Platform Info */}
      <PlatformInfo />

      {/* Stats Grid */}
      <div className="stats-grid">
        <StatsCard
          value={dashboardStats.totalLessons}
          label="บทเรียนทั้งหมด"
          icon="📚"
          trend="up"
          trendValue="+12%"
          color="text-cyan-300"
        />
        <StatsCard
          value={dashboardStats.studentsJoined}
          label="นักเรียนที่เข้าร่วม"
          icon="👥"
          trend="up"
          trendValue="+8%"
          color="text-cyan-300"
        />
        <StatsCard
          value={`${dashboardStats.workSuccessRate}%`}
          label="อัตราการทำงานเสร็จ"
          icon="✅"
          trend="up"
          trendValue="+5%"
          color="text-cyan-300"
        />
        <StatsCard
          value={dashboardStats.averageRating}
          label="คะแนนเฉลี่ย"
          icon="⭐"
          trend="stable"
          trendValue="0%"
          color="text-cyan-300"
        />
      </div>

      {/* Navigation Grid */}
      <div className="nav-grid">
        <GlassCard hover onClick={() => setCurrentPage("management")}>
          <GraduationCap className="w-8 h-8 mx-auto mb-3 animate-float" />
          <div className="nav-card__title">ระบบจัดการ</div>
          <div className="nav-card__title">ทรัพยากรการเรียนรู้</div>
          <div className="nav-card__description">
            แพลตฟอร์มสำหรับการจัดการเนื้อหาการเรียนรู้ที่ทันสมัยและใช้งานง่าย
          </div>
        </GlassCard>

        <GlassCard hover onClick={() => setCurrentPage("documents")}>
          <BookOpen className="w-8 h-8 mx-auto mb-3 animate-float" />
          <div className="nav-card__title">นำเข้าเอกสารและ</div>
          <div className="nav-card__title">บทเรียน</div>
          <div className="nav-card__description">
            อัปโหลดและจัดการเอกสารการเรียนการสอน
          </div>
        </GlassCard>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <h3 className="bottom-section__title">ร่วมสร้างการเปลี่ยนแปลง</h3>
        <p className="bottom-section__subtitle">
          เชื่อมต่อการเรียนรู้ สู่อนาคตที่ดีกว่า
        </p>
      </div>
    </div>
  );

  // Management Page
  const ManagementPage = () => (
    <div className="page-content">
      <GlassCard className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <GraduationCap className="w-8 h-8 animate-float" />
          <h1 className="text-xl font-bold">ระบบจัดการทรัพยากรการเรียนรู้</h1>
        </div>
        <p className="text-sm opacity-90">
          แพลตฟอร์มสำหรับการจัดการเนื้อหาการเรียนรู้ที่ทันสมัยและใช้งานง่าย
        </p>
      </GlassCard>

      {/* User Roles */}
      <div className="space-y-4 mb-6">
        {userRoles.slice(0, 2).map((role, index) => (
          <GlassCard
            key={role.id}
            hover
            onClick={() => setCurrentPage("login")}
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">{role.emoji}</span>
              <div className="flex-1">
                <div className="font-semibold text-lg">{role.name}</div>
                <div className="text-sm opacity-90">{role.description}</div>
                <div className="text-xs mt-1 opacity-75">
                  สิทธิ์: {role.permissions.join(", ")}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <GlassCard hover onClick={() => setCurrentPage("documents")}>
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6 animate-float" />
          <span className="font-semibold">นำเข้าเอกสารและบทเรียน</span>
        </div>
      </GlassCard>
    </div>
  );

  // Documents Page
  const DocumentsPage = () => (
    <div className="page-content">
      <GlassCard className="mb-6">
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6 animate-float" />
          <h1 className="text-xl font-bold">นำเข้าเอกสารและบทเรียน</h1>
        </div>
      </GlassCard>

      <GlassCard variant="upload" className="cursor-pointer mb-6">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce-gentle">📁</div>
          <h3 className="text-lg font-semibold mb-2">
            คลิกเพื่อเลือกไฟล์หรือลากไฟล์มาวางที่นี่
          </h3>
          <p className="text-sm opacity-90 mb-4">
            รองรับ PDF, DOC, PPT, Video, รูปภาพ (สูงสุด 100MB)
          </p>
          <div className="text-xs opacity-75">
            ไฟล์ที่รองรับ: .pdf, .doc, .docx, .ppt, .pptx, .mp4, .jpg, .png
          </div>
        </div>
      </GlassCard>

      <div className="space-y-3">
        <ActionButton
          variant="upload"
          onClick={() => alert("เลือกไฟล์สำหรับอัปโหลด")}
        >
          <Upload className="w-5 h-5" />
          อัปโหลดไฟล์
        </ActionButton>

        <ActionButton
          variant="secondary"
          onClick={() => setCurrentPage("lessons")}
        >
          <FileText className="w-5 h-5" />
          สร้างบทเรียนใหม่
        </ActionButton>
      </div>
    </div>
  );

  // Lessons Page
  const LessonsPage = () => (
    <div className="page-content">
      <GlassCard className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-6 h-6 animate-float" />
          <h1 className="text-xl font-bold">จัดการบทเรียน</h1>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
          <input
            type="text"
            placeholder="ค้นหาบทเรียน..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/20 backdrop-blur-lg rounded-full py-3 pl-12 pr-4 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {subjects.map((subject, index) => (
            <button
              key={index}
              onClick={() => setSelectedSubject(subject)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 ${
                selectedSubject === subject
                  ? "bg-white/40 text-white font-semibold shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Featured Lesson */}
      <GlassCard hover className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-2xl animate-bounce-gentle">
            {lessons[0].emoji}
          </div>
          <div>
            <h2 className="text-lg font-semibold">{lessons[0].title}</h2>
            <div className="text-sm opacity-75">
              {lessons[0].subject} • {lessons[0].level}
            </div>
          </div>
        </div>
        <p className="text-sm opacity-90 mb-4 leading-relaxed">
          {lessons[0].description}
        </p>

        <div className="flex items-center gap-6 text-sm mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{lessons[0].students} นักเรียน</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{lessons[0].duration} ชั่วโมง</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{lessons[0].date}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span>⭐ {lessons[0].rating}/5.0</span>
            <span>📊 {lessons[0].completionRate}% เสร็จ</span>
          </div>
          <div className="text-right opacity-75">
            อาจารย์: {lessons[0].teacher}
          </div>
        </div>
      </GlassCard>

      {/* Other Lessons */}
      <div className="space-y-3 mb-6">
        {lessons.slice(1, 3).map((lesson) => (
          <GlassCard key={lesson.id} hover className="py-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">{lesson.emoji}</span>
              <div className="flex-1">
                <div className="font-semibold">{lesson.title}</div>
                <div className="text-xs opacity-75">
                  {lesson.subject} • {lesson.students} นักเรียน
                </div>
              </div>
              <div className="text-xs text-right opacity-75">
                <div>{lesson.date}</div>
                <div>⭐ {lesson.rating}</div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <ActionButton variant="primary" onClick={() => alert("สร้างบทเรียนใหม่")}>
        ➕ สร้างบทเรียนใหม่
      </ActionButton>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage />;
      case "management":
        return <ManagementPage />;
      case "documents":
        return <DocumentsPage />;
      case "lessons":
        return <LessonsPage />;
      case "login":
        return <LoginPage />;
      default:
        return <DashboardPage />;
    }
  };

  // Don't show layout for login page
  if (currentPage === "login") {
    return renderPage();
  }

  return (
    <div className="app">
      <Sidebar 
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      
      <main className={`app__main ${isSidebarOpen ? 'app__main--shifted' : ''}`}>
        <div className="app__container">
          {renderPage()}
          
          {/* App Info */}
          <div className="app-info">
            <p>EduConnect v1.0.0 - Full Version ✨</p>
            <p>พัฒนาด้วย React + Vite + Tailwind CSS + SCSS</p>
            <p>
              สถานะ: {currentPage} | ข้อมูล: {lessons.length} บทเรียน,{" "}
              {dashboardStats.studentsJoined} นักเรียน
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;