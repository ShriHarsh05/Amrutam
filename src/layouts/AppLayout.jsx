import { useState } from "react";

function AppLayout({ children, showHero = false, userName = "Priya" }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const getMenuItemStyle = (itemKey, isActive = false) => ({
    ...styles.menuItem,
    backgroundColor: isActive ? "#4a7c59" : (hoveredItem === itemKey ? "#f0f7f0" : "transparent"),
    color: isActive ? "white" : (hoveredItem === itemKey ? "#4a7c59" : "#555"),
    transform: hoveredItem === itemKey && !isActive ? "translateX(4px)" : "translateX(0)",
    fontWeight: isActive ? "500" : "400",
  });
  return (
    <div style={styles.app}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <span style={styles.phone}>📞 +91 9826352321</span>
        </div>
        
        <div style={styles.headerCenter}>
          <div style={styles.logo}>AMRUTAM</div>
          <nav style={styles.topNav}>
            <span>Home</span>
            <span>Find Doctors</span>
            <span>Shop</span>
            <span>Forum</span>
            <span>About Us</span>
          </nav>
        </div>
        
        <div style={styles.headerRight}>
          <div style={styles.iconBadge}>💬 <span style={styles.badge}>5</span></div>
          <div style={styles.iconBadge}>🛒 <span style={styles.badge}>7</span></div>
          <div style={styles.iconBadge}>🔔 <span style={styles.badge}>1</span></div>
          <div style={styles.profileIcon}>👤</div>
        </div>
      </header>

      {/* Hero Section */}
      {showHero && (
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Namaste, {userName}</h1>
            <p style={styles.heroSubtitle}>How are you feeling today?</p>
          </div>
          <div style={styles.heroDecoration}>
            {/* Botanical elements */}
            <div style={styles.leaf1}>🌿</div>
            <div style={styles.leaf2}>🌿</div>
          </div>
        </section>
      )}

      {/* Body */}
      <div style={styles.body}>
        <aside style={styles.sidebar}>
    <div style={styles.profileCard}>
      <div style={styles.avatar}>👤</div>
      <div style={styles.profileName}>{userName} Singhal</div>
      <div style={styles.profileMeta}>New Delhi, India</div>
    </div>

    <div style={styles.menu}>
      <div 
        style={getMenuItemStyle('dashboard')}
        onMouseEnter={() => setHoveredItem('dashboard')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <span style={styles.menuIcon}>📊</span>
        <span>Dashboard</span>
      </div>
      
      <div 
        style={getMenuItemStyle('appointments', true)}
        onMouseEnter={() => setHoveredItem('appointments')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <span style={styles.menuIcon}>📅</span>
        <span>Appointments</span>
      </div>
      
      <div 
        style={getMenuItemStyle('wallet')}
        onMouseEnter={() => setHoveredItem('wallet')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <span style={styles.menuIcon}>💰</span>
        <span>My Wallet</span>
      </div>
      
      <div 
        style={getMenuItemStyle('chats')}
        onMouseEnter={() => setHoveredItem('chats')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <span style={styles.menuIcon}>💬</span>
        <span>My Chats</span>
      </div>
      
      <div 
        style={getMenuItemStyle('orders')}
        onMouseEnter={() => setHoveredItem('orders')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <span style={styles.menuIcon}>📦</span>
        <span>My Orders</span>
      </div>
    </div>
  </aside>

  {/* Main content */}
  <main style={styles.main}>
    {children}
  </main>
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "260px",
    background: "#ffffff",
    borderRight: "1px solid #e8e6e3",
    padding: "24px 16px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    boxShadow: "2px 0 8px rgba(0,0,0,0.05)",
  },

main: {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  overflowY: "auto",
  padding: "24px",
  background: "#f8f9fa",
},

profileCard: {
  textAlign: "center",
},

avatar: {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: "#e6efe8",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "36px",
  margin: "0 auto 12px",
},

profileName: {
  fontWeight: "600",
  fontSize: "16px",
  marginBottom: "4px",
},

profileMeta: {
  fontSize: "13px",
  color: "#777",
},

menu: {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
},

menuItem: {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 16px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "14px",
  transition: "all 0.3s ease",
  margin: "2px 0",
},

menuIcon: {
  fontSize: "16px",
  width: "20px",
  transition: "transform 0.2s ease",
},

menuItemActive: {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 16px",
  borderRadius: "8px",
  background: "#4a7c59",
  color: "white",
  fontWeight: "500",
  fontSize: "14px",
},

  app: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Inter, Arial, sans-serif",
    background: "#f8f9fa",
    overflow: "hidden",
    margin: 0,
    padding: 0,
  },

  header: {
    height: "70px",
    background: "#f5f3f0",
    display: "flex",
    alignItems: "center",
    padding: "0 40px",
    justifyContent: "space-between",
    borderBottom: "1px solid #e8e6e3",
  },

  headerLeft: {
    flex: "0 0 200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  headerCenter: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },

  phone: {
    fontSize: "14px",
    color: "#666",
  },

  logo: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#2d5016",
    letterSpacing: "2px",
  },

  topNav: {
    display: "flex",
    gap: "32px",
    color: "#444",
    fontSize: "16px",
    fontWeight: "500",
  },

  headerRight: {
    flex: "0 0 200px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    justifyContent: "flex-end",
  },

  iconBadge: {
    position: "relative",
    fontSize: "20px",
    cursor: "pointer",
  },

  badge: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    background: "#4a7c59",
    color: "white",
    borderRadius: "50%",
    width: "18px",
    height: "18px",
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  profileIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: "#4a7c59",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  hero: {
    background: "linear-gradient(135deg, #d4f1d4 0%, #b8e6b8 100%)",
    padding: "20px 40px",
    position: "relative",
    overflow: "hidden",
    minHeight: "80px",
  },

  heroContent: {
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },

  heroTitle: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#2d5016",
    margin: "0 0 4px 0",
  },

  heroSubtitle: {
    fontSize: "14px",
    color: "#5a7c5a",
    margin: 0,
  },

  heroDecoration: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
  },

  leaf1: {
    position: "absolute",
    top: "20px",
    left: "10%",
    fontSize: "60px",
    opacity: 0.3,
    transform: "rotate(-15deg)",
  },

  leaf2: {
    position: "absolute",
    bottom: "20px",
    right: "10%",
    fontSize: "80px",
    opacity: 0.2,
    transform: "rotate(25deg)",
  },

  body: {
    flex: 1,
    display: "flex",
    overflow: "hidden",
    padding: "0 32px",
  },
};

export default AppLayout;
