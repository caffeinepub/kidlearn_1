import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import { AiTutorChat } from "./components/AiTutorChat";
import { useInternetIdentity } from "./hooks/useInternetIdentity";
import { useStudentProfile } from "./hooks/useStudentProfile";
import AdminPanel from "./pages/AdminPanel";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import ProfilePage from "./pages/ProfilePage";
import SubjectPage from "./pages/SubjectPage";
import TopicPage from "./pages/TopicPage";

// Simple hash-based router
function useRoute() {
  const [path, setPath] = useState(() => {
    const hash = window.location.hash.slice(1) || "/";
    return hash;
  });

  useEffect(() => {
    const handler = () => {
      const hash = window.location.hash.slice(1) || "/";
      setPath(hash);
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return path;
}

export function navigate(to: string | number) {
  if (typeof to === "number") {
    window.history.go(to);
  } else {
    window.location.hash = to;
  }
}

export function useNavigate() {
  return navigate;
}

export function useParams(): Record<string, string> {
  const path = window.location.hash.slice(1) || "/";
  const routes = [
    { pattern: /^\/subject\/(\d+)\/(\d+)$/, keys: ["classId", "subjectId"] },
    {
      pattern: /^\/topic\/(\d+)\/(\d+)\/(\d+)\/(\d+)$/,
      keys: ["classId", "subjectId", "chapterId", "topicId"],
    },
  ];
  for (const route of routes) {
    const match = path.match(route.pattern);
    if (match) {
      const params: Record<string, string> = {};
      route.keys.forEach((key, i) => {
        params[key] = match[i + 1];
      });
      return params;
    }
  }
  return {};
}

function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 relative mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        </div>
        <p className="font-display text-lg font-bold text-foreground mb-1">
          KidLearn
        </p>
        <p className="text-muted-foreground font-body text-sm">
          Loading your learning journey...
        </p>
      </div>
    </div>
  );
}

function AppRoutes() {
  const path = useRoute();
  const { identity, isInitializing } = useInternetIdentity();
  const { data: profile, isLoading: profileLoading } = useStudentProfile();

  if (isInitializing) {
    return <LoadingScreen />;
  }

  // Public routes
  if (path === "/" || !identity) {
    return (
      <>
        <Landing />
        <Toaster position="top-center" richColors />
      </>
    );
  }

  // Onboarding
  if (path === "/onboarding") {
    return (
      <>
        <Onboarding />
        <Toaster position="top-center" richColors />
      </>
    );
  }

  // If authenticated but profile still loading
  if (profileLoading) {
    return <LoadingScreen />;
  }

  // If authenticated but no profile → onboarding
  if (profile === null && path !== "/onboarding") {
    return (
      <>
        <Onboarding />
        <Toaster position="top-center" richColors />
      </>
    );
  }

  // Protected routes
  const renderPage = () => {
    if (path === "/dashboard") return <Dashboard />;
    if (path === "/admin") return <AdminPanel />;
    if (path === "/profile") return <ProfilePage />;
    if (/^\/subject\/\d+\/\d+$/.test(path)) return <SubjectPage />;
    if (/^\/topic\/\d+\/\d+\/\d+\/\d+$/.test(path)) return <TopicPage />;
    // Default fallback
    return <Dashboard />;
  };

  return (
    <>
      {renderPage()}
      <AiTutorChat />
      <Toaster position="top-center" richColors />
    </>
  );
}

export default function App() {
  return <AppRoutes />;
}
