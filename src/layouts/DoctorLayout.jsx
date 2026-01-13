import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBell, 
  faUser,
  faChartBar,
  faCalendarAlt,
  faUserMd,
  faUniversity,
  faUsers,
  faCalendarCheck,
  faCommentDots,
  faClipboardList,
  faChevronDown,
  faSearch,
  faChevronRight,
  faEnvelope,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

function DoctorLayout({ children, doctorName = "Dr. Liam Michael" }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [appointmentsOpen, setAppointmentsOpen] = useState(false);

  const getMenuItemStyle = (itemKey) => ({
    ...styles.menuItem,
    backgroundColor: hoveredItem === itemKey ? "#f0f7f0" : "transparent",
    color: hoveredItem === itemKey ? "#4a7c59" : "#666",
    transform: hoveredItem === itemKey ? "translateX(4px)" : "translateX(0)",
  });

  const getSubMenuItemStyle = (itemKey) => ({
    ...styles.subMenuItem,
    backgroundColor: hoveredItem === itemKey ? "#e8f5e8" : "transparent",
    color: hoveredItem === itemKey ? "#4a7c59" : "#666",
    transform: hoveredItem === itemKey ? "translateX(2px)" : "translateX(0)",
  });

  return (
    <div style={styles.app}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <img 
                src="https://tse3.mm.bing.net/th/id/OIP.r7Z8JNQYeCuJ1llDcKflAAHaHF?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3" 
                alt="Amrutam Logo"
                style={styles.logoImage}
              />
            </div>
            <span style={styles.logoText}>AMRUTAM</span>
          </div>
        </div>
        
        <div style={styles.headerCenter}>
          <div style={styles.searchContainer}>
            <FontAwesomeIcon icon={faSearch} style={styles.searchIconSvg} />
            <input 
              type="text" 
              placeholder="Search Here!" 
              style={styles.searchInput}
            />
          </div>
        </div>
        
        <div style={styles.headerRight}>
          <div style={styles.iconBadge}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.headerIcon} />
            <span style={styles.badge}>5</span>
          </div>
          <div style={styles.iconBadge}>
            <FontAwesomeIcon icon={faBell} style={styles.headerIcon} />
            <span style={styles.badge}>9</span>
          </div>
          <div style={styles.doctorInfo}>
            <span style={styles.doctorName}>{doctorName}</span>
            <span style={styles.doctorPhone}>+91234567890</span>
          </div>
          <div style={styles.profileContainer}>
            <div style={styles.profileIcon}>
              <FontAwesomeIcon icon={faUser} style={styles.profileIconSvg} />
            </div>
            <FontAwesomeIcon icon={faChevronDown} style={styles.dropdownArrow} />
          </div>
        </div>
      </header>

      {/* Body */}
      <div style={styles.body}>
        <aside style={styles.sidebar}>
          <div style={styles.sidebarTitle}>Main</div>
          
          <div style={styles.menu}>
            <div 
              style={getMenuItemStyle('dashboard')}
              onMouseEnter={() => setHoveredItem('dashboard')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <FontAwesomeIcon icon={faChartBar} style={styles.menuIconSvg} />
              <span>Dashboard</span>
              <FontAwesomeIcon icon={faChevronRight} style={styles.menuArrow} />
            </div>
            
            <div 
              style={getMenuItemStyle('schedule')}
              onMouseEnter={() => setHoveredItem('schedule')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <FontAwesomeIcon icon={faCalendarAlt} style={styles.menuIconSvg} />
              <span>Schedule</span>
              <FontAwesomeIcon icon={faChevronRight} style={styles.menuArrow} />
            </div>
            
            <div 
              style={getMenuItemStyle('consultation')}
              onMouseEnter={() => setHoveredItem('consultation')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <FontAwesomeIcon icon={faUserMd} style={styles.menuIconSvg} />
              <span>Consultation</span>
              <FontAwesomeIcon icon={faChevronRight} style={styles.menuArrow} />
            </div>
            
            <div 
              style={getMenuItemStyle('bankinfo')}
              onMouseEnter={() => setHoveredItem('bankinfo')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <FontAwesomeIcon icon={faUniversity} style={styles.menuIconSvg} />
              <span>Bank Info</span>
              <FontAwesomeIcon icon={faChevronRight} style={styles.menuArrow} />
            </div>
            
            <div 
              style={getMenuItemStyle('patients')}
              onMouseEnter={() => setHoveredItem('patients')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <FontAwesomeIcon icon={faUsers} style={styles.menuIconSvg} />
              <span>Patients</span>
              <FontAwesomeIcon icon={faChevronRight} style={styles.menuArrow} />
            </div>
            
            <div style={styles.menuSection}>
              <div 
                style={getMenuItemStyle('appointments')}
                onMouseEnter={() => setHoveredItem('appointments')}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setAppointmentsOpen(!appointmentsOpen)}
              >
                <FontAwesomeIcon icon={faCalendarCheck} style={styles.menuIconSvg} />
                <span>Appointments</span>
                <FontAwesomeIcon 
                  icon={faChevronRight} 
                  style={{
                    ...styles.menuArrow,
                    transform: appointmentsOpen ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease"
                  }}
                />
              </div>
              {appointmentsOpen && (
                <div style={styles.subMenu}>
                  <div 
                    style={getSubMenuItemStyle('appointmentlist')}
                    onMouseEnter={() => setHoveredItem('appointmentlist')}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <FontAwesomeIcon icon={faClipboardList} style={styles.subMenuIconSvg} />
                    <span>Appointment List</span>
                  </div>
                  <div 
                    style={getSubMenuItemStyle('addappointment')}
                    onMouseEnter={() => setHoveredItem('addappointment')}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <FontAwesomeIcon icon={faPlus} style={styles.subMenuIconSvg} />
                    <span>Add Appointment</span>
                  </div>
                </div>
              )}
            </div>
            
            <div 
              style={getMenuItemStyle('chat')}
              onMouseEnter={() => setHoveredItem('chat')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <FontAwesomeIcon icon={faCommentDots} style={styles.menuIconSvg} />
              <span>Chat</span>
              <FontAwesomeIcon icon={faChevronRight} style={styles.menuArrow} />
            </div>
            
            <div 
              style={getMenuItemStyle('forum')}
              onMouseEnter={() => setHoveredItem('forum')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <FontAwesomeIcon icon={faClipboardList} style={styles.menuIconSvg} />
              <span>Forum</span>
              <FontAwesomeIcon icon={faChevronRight} style={styles.menuArrow} />
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
    height: "60px",
    background: "#faf7f2",
    display: "flex",
    alignItems: "center",
    padding: "0 24px",
    justifyContent: "space-between",
    borderBottom: "1px solid #e8e6e3",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },

  headerLeft: {
    flex: "0 0 200px",
    display: "flex",
    alignItems: "center",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  logoIcon: {
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logoImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "4px",
  },

  logoText: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#2d5016",
    letterSpacing: "1px",
  },

  headerCenter: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "400px",
    margin: "0 auto",
  },

  searchContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "350px",
  },

  searchIcon: {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#999",
    fontSize: "16px",
  },

  searchIconSvg: {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#999",
    fontSize: "14px",
    zIndex: 1,
  },

  searchInput: {
    width: "100%",
    padding: "8px 12px 8px 40px",
    border: "1px solid #ddd",
    borderRadius: "20px",
    fontSize: "14px",
    outline: "none",
    background: "#ffffff",
    color: "#666",
  },

  headerRight: {
    flex: "0 0 300px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    justifyContent: "flex-end",
  },

  iconBadge: {
    position: "relative",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  headerIcon: {
    fontSize: "18px",
    color: "#666",
  },

  notificationIcon: {
    fontSize: "18px",
    color: "#666",
  },

  badge: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    background: "#4a7c59",
    color: "white",
    borderRadius: "50%",
    width: "16px",
    height: "16px",
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  doctorInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "2px",
  },

  doctorName: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
  },

  doctorPhone: {
    fontSize: "12px",
    color: "#666",
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

  profileContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  },

  profileIconSvg: {
    fontSize: "16px",
    color: "white",
  },

  dropdownArrow: {
    fontSize: "12px",
    color: "#666",
  },

  body: {
    flex: 1,
    display: "flex",
    overflow: "hidden",
  },

  sidebar: {
    width: "240px",
    background: "#ffffff",
    borderRight: "1px solid #e8e6e3",
    padding: "24px 0",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    boxShadow: "2px 0 8px rgba(0,0,0,0.05)",
  },

  sidebarTitle: {
    padding: "0 24px 16px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    borderBottom: "1px solid #f0f0f0",
    marginBottom: "16px",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
  },

  menuItem: {
    display: "flex",
    alignItems: "center",
    padding: "12px 24px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    gap: "12px",
    color: "#666",
    fontSize: "14px",
    borderRadius: "8px",
    margin: "2px 12px",
    position: "relative",
    fontWeight: "500",
  },

  menuIcon: {
    fontSize: "16px",
    width: "20px",
    transition: "transform 0.2s ease",
  },

  menuIconSvg: {
    fontSize: "16px",
    width: "20px",
    color: "inherit",
  },

  menuArrow: {
    marginLeft: "auto",
    fontSize: "12px",
    color: "#999",
    transition: "all 0.2s ease",
  },

  menuSection: {
    display: "flex",
    flexDirection: "column",
  },

  subMenu: {
    background: "#f8f9fa",
    paddingLeft: "12px",
    borderRadius: "0 0 8px 8px",
    marginLeft: "12px",
    marginRight: "12px",
    overflow: "hidden",
    animation: "slideDown 0.3s ease-out",
    borderLeft: "3px solid #4a7c59",
  },

  subMenuItem: {
    display: "flex",
    alignItems: "center",
    padding: "8px 24px",
    cursor: "pointer",
    gap: "8px",
    color: "#666",
    fontSize: "13px",
    borderRadius: "6px",
    margin: "1px 0",
    transition: "all 0.2s ease",
    fontWeight: "400",
  },

  subMenuIcon: {
    fontSize: "12px",
    color: "#999",
  },

  subMenuIconSvg: {
    fontSize: "12px",
    width: "16px",
    color: "inherit",
  },

  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "24px",
    overflowY: "auto",
    background: "#f8f9fa",
  },
};

export default DoctorLayout;