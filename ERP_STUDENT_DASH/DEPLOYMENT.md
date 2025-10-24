# Deployment Guide - Student ERP Dashboard

## 🚀 Deploying to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier available at [vercel.com](https://vercel.com))
- Backend API deployed (Heroku, Railway, Render, etc.)

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js framework

3. **Configure Environment Variables**
   Add the following in Vercel dashboard under "Environment Variables":
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-api-url.com
   ```
   
   **Important**: Replace `https://your-backend-api-url.com` with your actual backend URL

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your app will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```
   Follow the authentication steps in your browser

3. **Deploy**
   ```bash
   cd ERP_STUDENT_DASH
   vercel
   ```
   
   During first deployment, answer:
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - What's your project's name? `student-erp-dashboard`
   - In which directory is your code located? `./`
   - Want to override settings? `N`

4. **Set Environment Variables**
   ```bash
   vercel env add NEXT_PUBLIC_API_URL
   ```
   Enter your backend API URL when prompted

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 3: Automatic Deployments (Recommended for Teams)

1. **Connect GitHub to Vercel**
   - Link your repository in Vercel dashboard
   - Enable automatic deployments

2. **Configure Branch Deployments**
   - `main` branch → Production
   - Other branches → Preview deployments

3. **Every Git Push = Automatic Deploy**
   - Push to GitHub triggers build
   - Get preview URL for each PR
   - Merge to main deploys to production

## 🔧 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `https://api.example.com` |

### Setting Environment Variables

**Via Vercel Dashboard:**
1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add each variable with appropriate value
4. Select environment (Production/Preview/Development)

**Via CLI:**
```bash
vercel env add NEXT_PUBLIC_API_URL production
```

## 📋 Pre-Deployment Checklist

- [ ] Backend API is deployed and accessible
- [ ] Backend API URL is noted
- [ ] CORS is configured on backend to allow Vercel domain
- [ ] All dependencies are listed in `package.json`
- [ ] Build succeeds locally: `npm run build`
- [ ] Environment variables are documented
- [ ] `.env.local.example` is committed to repo
- [ ] Actual `.env.local` is in `.gitignore`

## 🔍 Troubleshooting

### Build Fails

**Issue**: Module not found errors
```bash
npm install
npm run build
```
Fix missing dependencies and commit `package.json`

**Issue**: TypeScript errors
```bash
npm run lint
```
Fix all TypeScript/ESLint errors before deploying

### Runtime Errors

**Issue**: API calls fail
- Check `NEXT_PUBLIC_API_URL` is set correctly
- Verify backend API is accessible
- Check CORS settings on backend

**Issue**: 404 on routes
- Ensure file structure matches Next.js App Router convention
- Check `src/app` directory structure

### Environment Variables Not Working

**Issue**: Variables undefined in browser
- Ensure variable name starts with `NEXT_PUBLIC_`
- Redeploy after adding variables
- Check variable is set for correct environment

## 🌐 Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain

2. **Configure DNS**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or A record to Vercel's IP

3. **SSL Certificate**
   - Automatically provisioned by Vercel
   - Usually takes 1-2 minutes

## 📊 Monitoring & Analytics

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `src/app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Performance Monitoring
- View in Vercel Dashboard → Analytics
- Monitor Core Web Vitals
- Track real user performance

## 🔄 Updating Deployment

### Via Git Push
```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```
Vercel automatically rebuilds and deploys

### Via CLI
```bash
vercel --prod
```

## 🎯 Production Optimizations

### Image Optimization
- Next.js automatically optimizes images
- Use `next/image` component
- Images served as WebP automatically

### Code Splitting
- Automatic by Next.js
- Each route is a separate bundle
- Lazy loading enabled

### Caching
- Static assets cached at edge
- API routes cached based on headers
- Configure in `next.config.js`

## 📱 Testing Deployment

1. **Check Build Logs**
   - Vercel Dashboard → Deployments
   - View build output for errors

2. **Test All Routes**
   - Login page
   - Dashboard
   - All feature pages

3. **Test API Integration**
   - Login functionality
   - Data fetching
   - Error handling

4. **Check Mobile Responsiveness**
   - Use Vercel's preview on different devices
   - Test on real mobile devices

## 🔐 Security Best Practices

- [ ] Use environment variables for secrets
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Configure CSP headers
- [ ] Set up authentication properly
- [ ] Rate limit API endpoints on backend
- [ ] Keep dependencies updated

## 💰 Pricing Considerations

### Vercel Free Tier Includes:
- Unlimited deployments
- Automatic HTTPS
- 100 GB bandwidth/month
- Serverless functions
- Preview deployments
- Analytics

### Upgrade When:
- Need more bandwidth
- Advanced analytics required
- Team collaboration features
- Custom authentication

## 📞 Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Next.js GitHub](https://github.com/vercel/next.js)

## 🚀 Quick Deploy Commands

```bash
# First time setup
npm install -g vercel
vercel login
vercel

# Subsequent deployments
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs [deployment-url]

# Remove deployment
vercel rm [deployment-name]
```

---

**Need Help?** Check the [Vercel Support](https://vercel.com/support) or refer to our backend deployment guide.
