# Triana Guardian Eye 👁️‍🗨️
**Advanced AI-Powered Tourist Safety Platform**

A comprehensive tourist safety monitoring and incident response system designed specifically for Triana, featuring real-time tracking, automated E-FIR generation, and intelligent alert management.

## 🌟 Features

### 🏠 **Dashboard**
- Real-time tourist statistics and safety metrics
- Interactive incident tracking with visual status indicators  
- Quick action cards for immediate response
- System health monitoring

### 🗺️ **Interactive Map**
- Live tourist location tracking with OpenLayers integration
- Geo-fence monitoring for high-risk areas
- CCTV camera overlay and surveillance points
- Heat map visualization of incident hotspots

### 🆔 **Digital ID Management**
- Tourist profile verification system
- Trip itinerary tracking and status monitoring
- Safety score calculation based on travel patterns
- Emergency contact management

### 📋 **Automated E-FIR Generation**
- AI-powered incident report processing using Google Genkit
- Natural language processing for extracting key information
- Automated missing person report generation
- Structured data output for law enforcement

### 🚨 **Incident Reporting**
- Streamlined incident submission workflow  
- Real-time status updates and officer assignment
- Categorized incident types (missing person, theft, medical, etc.)
- Priority-based alert system

### 📊 **Alert History**
- Comprehensive alert log with filtering capabilities
- Geo-fence breach notifications
- SOS alert management
- Device connectivity monitoring

## 🛠️ Technology Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Shadcn/ui** - Modern component library
- **Lucide Icons** - Consistent iconography

### **Mapping & Geospatial**
- **OpenLayers** - Interactive map rendering
- **Geospatial APIs** - Location services and geocoding

### **AI & Automation**
- **Google Genkit** - AI workflow orchestration
- **Natural Language Processing** - Text analysis for E-FIR generation
- **Automated Report Generation** - Structured data extraction

### **State Management & Forms**
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **React Hooks** - State management

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lhcee3/triana-dash.git
   cd triana-dash/triana-dash
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Configure your environment variables for AI services and API endpoints.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── ai/                     # AI workflows and Genkit integration
│   ├── genkit.ts          # Genkit configuration
│   └── flows/             # AI automation flows
│       └── automate-e-fir-generation.ts
├── app/                   # Next.js App Router pages
│   ├── alerts/           # Alert management
│   ├── digital-id/       # Tourist ID system
│   ├── e-fir/           # E-FIR generation
│   ├── incidents/        # Incident reporting
│   ├── map/             # Interactive mapping
│   └── layout.tsx       # Root layout
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/ui components
│   ├── app-sidebar.tsx  # Navigation sidebar
│   ├── e-fir-form.tsx   # E-FIR form component
│   └── openlayers-map.tsx # Map component
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and configurations
└── styles/              # Global styles and CSS
```

## 🎨 Design System

### **Color Scheme: Deep Ocean Blue**
- **Primary Background**: `slate-900/800/700` gradients
- **Card Backgrounds**: `slate-800/90` with `slate-700` borders
- **Accent Colors**: `blue-500/600` for primary actions
- **Status Colors**: 
  - Success: `emerald-600`
  - Warning: `amber-600` 
  - Error: `rose-600`
- **Text Hierarchy**: White primary, `slate-200/300` secondary

### **Components**
- Consistent card styling with gradient headers
- Interactive hover states and transitions
- Glassmorphism effects replaced with solid backgrounds
- Responsive grid layouts for all screen sizes

## 🔧 Configuration

### **AI Configuration**
The system uses Google Genkit for AI-powered features. Configure your AI settings in:
- `src/ai/genkit.ts` - Main Genkit configuration
- `src/ai/flows/` - Individual AI workflow definitions

### **Styling Configuration**
- `tailwind.config.ts` - Tailwind CSS customization
- `src/app/globals.css` - Global styles and CSS variables
- `components.json` - Shadcn/ui component configuration

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured dashboard experience
- **Tablet**: Adaptive layouts with touch-friendly controls
- **Mobile**: Streamlined interface for field officers

## 🔒 Security Features

- Type-safe development with TypeScript
- Input validation with Zod schemas
- Secure form handling and data processing
- Protected routes and access control

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Deployment
npm run deploy       # Deploy to production
```

## 🐛 Troubleshooting

### Common Issues

1. **Map not loading**: Check OpenLayers configuration and API keys
2. **AI features not working**: Verify Genkit setup and API credentials
3. **Styling issues**: Ensure Tailwind CSS is properly configured

### Getting Help
- Check the [Issues](https://github.com/lhcee3/triana-dash/issues) page
- Review the project documentation
- Contact the development team

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Smart India Hackathon 2025** - Platform and inspiration
- **Next.js Team** - Excellent React framework
- **Shadcn** - Beautiful component library
- **OpenLayers** - Powerful mapping solution
- **Google Genkit** - AI workflow capabilities

---

**Built with ❤️ for tourist safety in Triana**

*For questions or support, please contact the development team.*
