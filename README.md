# Artisan Tiling Website

A modern, responsive website for Artisan Tiling, a professional tiling company based in Hamilton, New Zealand. Built with React and Vite, deployed on AWS using Terraform for infrastructure management, with automated CI/CD through GitHub Actions.

## 📋 Table of Contents
- [Features](#-features)
- [Frontend Setup](#-frontend-setup)
- [Infrastructure Setup](#-infrastructure-setup)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Components](#-components)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

## 🚀 Features

### Frontend
- Responsive design that works across all devices
- Modern UI/UX with smooth animations
- Interactive project portfolio with filtering
- Contact form with server integration
- Optimized performance and loading times
- SEO-friendly structure

### Infrastructure
- Automated AWS infrastructure deployment using Terraform
- CloudFront CDN with WAF protection
- S3 bucket for static website hosting
- Route53 DNS management with IPv6 support
- SSL/TLS certificate management
- Security-focused IAM policies

## 📋 Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)
- Terraform v1.0.0 or higher
- AWS CLI configured with appropriate credentials
- Domain registered in Route53

## 🛠️ Frontend Setup

1. Clone the repository:
```bash
git clone https://github.com/CaringalML/Artisan-Tiling-React-JS-Cloudfront.git
cd Artisan-Tiling-React-JS-Cloudfront
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_API_URL=https://serverless.artisantiling.co.nz
```

4. Start the development server:
```bash
npm run dev
```

## 📁 Project Structure

```
artisan-tiling/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── [Component].css
│   └── assets/
├── terraform/
│   ├── cloudfront.tf
│   ├── dns.tf
│   ├── iam.tf
│   ├── s3.tf
│   ├── waf.tf
│   └── variables.tf
├── public/
│   └── images/
├── .env
└── package.json
```

## 🏗️ Infrastructure Setup

### Infrastructure Components

#### 1. CloudFront Distribution (`cloudfront.tf`)
- CDN distribution with S3 origin
- HTTPS redirection
- Custom domain support
- URI rewrite function for SPA routing
- WAF integration

#### 2. DNS Configuration (`dns.tf`)
- ACM certificate management
- Route53 A and AAAA records
- DNS validation for SSL certificates
- Support for apex and www domains

#### 3. IAM Policies (`iam.tf`)
- S3 bucket access policy
- CloudFront service principal permissions
- Least privilege access controls

#### 4. S3 Configuration (`s3.tf`)
- Private bucket creation
- Server-side encryption
- CORS configuration
- Public access blocking
- Default folder structure

#### 5. WAF Security (`waf.tf`)
- AWS managed rule sets
- Rate limiting protection
- Common attack protection
- Known bad inputs filtering

### Infrastructure Deployment

1. Initialize Terraform:
```bash
cd terraform
terraform init
```

2. Review planned changes:
```bash
terraform plan
```

3. Apply infrastructure:
```bash
terraform apply
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The project uses GitHub Actions for continuous integration and deployment, triggered on:
- Push to `main` branch
- Pull requests to `main` branch

### Pipeline Stages

#### 1. Build Environment Setup
- Runs on Ubuntu latest
- Uses Node.js 20.x
- Utilizes npm cache for faster builds

#### 2. Dependencies Management
- Checks for existing node_modules
- Automatically installs dependencies if missing
- Uses `npm ci` for clean installs

#### 3. Environment Configuration
- Creates `.env` file from GitHub Secrets
- Configures environment variables

#### 4. Build Process
- Builds the React application
- Uses environment variables from secrets
- Generates production-ready assets

#### 5. AWS Deployment
- Configures AWS credentials from secrets
- Syncs build files to S3 bucket
- Invalidates CloudFront cache

### Required Secrets

Configure in GitHub repository settings:
```
AWS_ACCESS_KEY_ID          - AWS IAM access key
AWS_SECRET_ACCESS_KEY      - AWS IAM secret key
VITE_API_URL              - Backend API URL
CLOUDFRONT_DISTRIBUTION_ID - CloudFront distribution ID
```

## 🧩 Components

### Frontend Components
- Hero: Main landing section with CTAs
- About: Company information and statistics
- Services: Service offerings grid
- Projects: Filterable project portfolio
- Contact: Interactive contact form
- Navigation: Responsive navbar
- Footer: Multi-column footer

## 🚀 Complete Deployment Process

### Manual Deployment
1. Build the React application:
```bash
npm run build
```

2. Deploy infrastructure:
```bash
cd terraform
terraform apply
```

3. Upload to S3:
```bash
aws s3 sync dist/ s3://artisantilingbucket/react-build/
```

### Automated Deployment (CI/CD)
1. Push changes to main branch
2. GitHub Actions automatically:
   - Builds the application
   - Deploys to S3
   - Invalidates CloudFront cache

## 🔐 Security Features

- WAF protection against common web vulnerabilities
- Rate limiting to prevent DDoS attacks
- SSL/TLS encryption for all traffic
- Private S3 bucket with CloudFront access only
- Server-side encryption for stored files

## 📊 Monitoring and Maintenance

The infrastructure includes:
- CloudWatch metrics for WAF
- Access logging capabilities
- CloudFront distribution metrics
- S3 bucket metrics

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Note

I do not own any images I use from the website I build, I just search from google.

## 📄 License

This project is licensed under the ISC License.

## 👥 Author

- [CaringalML](https://github.com/CaringalML)

