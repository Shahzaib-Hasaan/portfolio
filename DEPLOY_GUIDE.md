# Deploying to GitHub Pages - Complete Guide

## Prerequisites
- GitHub account
- Git installed on your computer
- Your project built and working locally

## Step-by-Step Deployment Guide

### 1. Build Your Project
First, build your project for production:

```bash
npm run build
```

This creates a `dist` folder with your optimized production files.

### 2. Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio` or `my-portfolio`)
5. Make it public
6. Don't initialize with README (since we already have files)
7. Click "Create repository"

### 3. Initialize Git in Your Project
Open terminal in your project folder:

```bash
git init
git add .
git commit -m "Initial commit"
```

### 4. Connect to GitHub Repository
Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual values:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 5. Deploy to GitHub Pages

#### Option A: Using GitHub Actions (Recommended)
Create a file `.github/workflows/deploy.yml` in your project:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

Then:
1. Commit and push this file
2. Go to your repository on GitHub
3. Click "Settings" → "Pages"
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch and "/ (root)" folder
6. Click "Save"

#### Option B: Manual Deployment Using gh-pages Package

Install gh-pages:
```bash
npm install --save-dev gh-pages
```

Add these scripts to your `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Deploy:
```bash
npm run deploy
```

### 6. Configure GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch (or main if using Actions)
6. Click "Save"

### 7. Access Your Site
Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

It may take a few minutes for the site to be live.

## Important Notes

✅ **Base URL**: The `vite.config.ts` is already configured with `base: './'` for GitHub Pages

✅ **404 Handling**: The `.nojekyll` file is already created to prevent Jekyll processing

✅ **Updates**: To update your site, just push changes to main branch (if using Actions) or run `npm run deploy` (if using gh-pages)

## Troubleshooting

### Site not loading?
- Check if GitHub Pages is enabled in repository settings
- Wait 5-10 minutes for initial deployment
- Clear browser cache
- Check console for errors

### 404 errors on refresh?
- For single-page apps, create a `404.html` that's a copy of `index.html`
- This handles client-side routing properly

### Images not showing?
- Use relative paths for images
- Ensure images are in the `public` folder or imported as modules

## Custom Domain (Optional)
To use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

---

## Quick Commands Summary

```bash
# Build project
npm run build

# Deploy (if using gh-pages package)
npm run deploy

# Or commit and push (if using GitHub Actions)
git add .
git commit -m "Update site"
git push
```

Your portfolio is now ready to be deployed! 🚀