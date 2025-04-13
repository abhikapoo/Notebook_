# Notebook Application Design Document

## 1. Application Overview

The Notebook application is a web-based note-taking platform built with Express.js that allows users to create, read, and manage their notes.

### Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: Pug templates + Bootstrap 5.3.5
- **Development Tools**: Nodemon

## 2. Architecture

### 2.1 Project Structure

```
notebook/
├── app.js                 # Main application entry point
├── bin/
│   └── www               # Server configuration
├── public/               # Static assets
│   ├── css/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
├── routes/               # Route handlers
│   ├── index.js
│   └── users.js
└── views/                # Pug templates
    ├── common/
    │   ├── layout.pug
    │   ├── navbar.pug
    │   └── form.pug
    ├── about.pug
    ├── home.pug
    ├── notes.pug
    └── reader.pug
```

### 2.2 Core Components

1. **Express Application (app.js)**

   - Middleware configuration
   - Route registration
   - Error handling
   - View engine setup

2. **Route Handlers**

   - Index routes (/)
   - Notes routes (/notes)
   - User routes (/users)
   - About routes (/about)
   - Reader routes (/reader)

3. **View Templates**
   - Layout system with common components
   - Page-specific templates
   - Responsive design using Bootstrap

## 3. Features

### 3.1 Current Features

- [x] Basic navigation
- [x] Note creation interface
- [x] About page
- [x] Contact page
- [x] Reader view
- [x] Responsive design

### 3.2 Planned Features

- [ ] User authentication
- [ ] Persistent note storage
- [ ] Note categories/tags
- [ ] Rich text editor
- [ ] Search functionality
- [ ] User preferences
- [ ] Export/Import notes
- [ ] Share notes

## 4. API Endpoints

### 4.1 Current Endpoints

```
GET  /          - Home page
GET  /notes     - Display notes page
POST /notes     - Create new note
GET  /about     - About page
GET  /contact   - Contact page
GET  /reader    - Reader view
GET  /users     - User management
```

### 4.2 Planned Endpoints

```
POST   /api/auth/login     - User login
POST   /api/auth/register  - User registration
GET    /api/notes         - Get all notes
GET    /api/notes/:id     - Get specific note
PUT    /api/notes/:id     - Update note
DELETE /api/notes/:id     - Delete note
```

## 5. Database Schema (Planned)

### Users

```sql
CREATE TABLE users (
    id          UUID PRIMARY KEY,
    username    VARCHAR(50) UNIQUE NOT NULL,
    email       VARCHAR(255) UNIQUE NOT NULL,
    password    VARCHAR(255) NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Notes

```sql
CREATE TABLE notes (
    id          UUID PRIMARY KEY,
    user_id     UUID REFERENCES users(id),
    title       VARCHAR(255) NOT NULL,
    content     TEXT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 6. Enhancement Roadmap

### Phase 1: Core Functionality

- [ ] Implement database integration
- [ ] Add user authentication
- [ ] Create RESTful API endpoints
- [ ] Add persistent note storage

### Phase 2: Feature Enhancement

- [ ] Implement rich text editor
- [ ] Add note categories and tags
- [ ] Add search functionality
- [ ] Implement user preferences

### Phase 3: Advanced Features

- [ ] Add note sharing
- [ ] Implement export/import
- [ ] Add collaborative editing
- [ ] Create mobile-responsive UI improvements

## 7. Development Guidelines

### 7.1 Code Style

- Use ES6+ features
- Follow Express.js best practices
- Implement proper error handling
- Use async/await for asynchronous operations
- Comment complex logic
- Use meaningful variable and function names

### 7.2 Testing Strategy

- Unit tests for utilities and helpers
- Integration tests for API endpoints
- E2E tests for critical user flows
- Test coverage requirements: >80%

### 7.3 Security Considerations

- Input validation
- XSS prevention
- CSRF protection
- Rate limiting
- Secure password storage
- JWT token management

## 8. Performance Optimization

### 8.1 Frontend

- Minimize CSS/JS bundles
- Implement lazy loading
- Use CDN for static assets
- Implement client-side caching

### 8.2 Backend

- Implement server-side caching
- Database query optimization
- API response compression
- Load balancing (future)

## 9. Deployment

### 9.1 Requirements

- Node.js >= 14.x
- npm >= 6.x
- Database (PostgreSQL recommended)
- Environment variables configuration

### 9.2 Environment Variables

```
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://username:password@localhost:5432/notebook
JWT_SECRET=your-secret-key
```

## 10. Maintenance

### 10.1 Regular Tasks

- Dependency updates
- Security patches
- Database backups
- Log rotation
- Performance monitoring

### 10.2 Monitoring

- Error tracking
- Performance metrics
- User analytics
- Server health checks

## 11. Documentation

### 11.1 Required Documentation

- API documentation
- User guide
- Development setup guide
- Deployment guide
- Contributing guidelines

### 11.2 Code Documentation

- JSDoc comments for functions
- API endpoint documentation
- Database schema documentation
- Architecture diagrams

## 12. Navigation & Layout Improvements

### Navbar Enhancements - Implemented

- Added dark/light theme toggle with persistent storage
  - Uses localStorage for theme preference
  - Bootstrap 5 theme system integration
  - Dynamic icon changes (moon/sun)
- Implemented active state indicator for current page
  - Visual underline indicator for active page
  - Dynamic active state based on current route
- Added search bar in the navigation
  - Responsive search form
  - Bootstrap styled search input
- Added user profile/settings dropdown
  - Profile menu with settings, notes, and logout options
  - Bootstrap dropdown component integration
- Made navbar sticky with box shadow
  - Improved visibility with shadow effect
  - Always accessible navigation

### Layout Updates - Implemented

- Added proper padding and margin
  - Consistent spacing system
  - Responsive padding adjustments
  - Proper content hierarchy
- Implemented sidebar for quick note access
  - Collapsible on mobile
  - Recent notes section
  - Quick access navigation
  - Icons for better visual hierarchy
- Responsive grid layout
  - Bootstrap grid system implementation
  - Mobile-first approach
  - Proper breakpoints configuration
- Added breadcrumbs
  - Dynamic route-based navigation
  - Clear user location indication
- Added footer with additional links
  - Newsletter subscription
  - Quick links section
  - Resources section
  - Responsive layout

### Technical Implementation Details

#### Theme System

```javascript
- Theme toggle using data-bs-theme attribute
- LocalStorage for theme persistence
- Dynamic icon updates
- CSS variables for theme colors
```

#### Responsive Design

```css
- Mobile breakpoint: < 768px
- Tablet breakpoint: 768px - 992px
- Desktop breakpoint: > 992px
- Collapsible sidebar on mobile
- Responsive typography
```

#### Component Structure

```pug
- Modular Pug templates
- Reusable components
- Bootstrap integration
- Icon system using Bootstrap Icons
```

#### CSS Architecture

```css
- Component-based styling
- Theme variables
- Responsive utilities
- Shadow system for depth
```

### Future Enhancements

1. Search Functionality

   - Implement backend search API
   - Add search suggestions
   - Real-time search results

2. User Profile

   - Add user authentication
   - Profile customization
   - User preferences storage

3. Sidebar Improvements

   - Dynamic recent notes
   - Note categories
   - Favorites section
   - Drag and drop organization

4. Additional Features
   - Note sharing
   - Collaborative editing
   - Export options
   - Advanced search filters
