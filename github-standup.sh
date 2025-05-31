#!/bin/bash

# GitHub Stand-up Automation Script
echo "=== iWORKZ Daily Stand-up Report ==="
echo "Date: $(date)"
echo "Repository: CarlosMundim/iworkz-investor-website"
echo "========================================"
echo ""

# GitHub repo details
REPO_OWNER="CarlosMundim"
REPO_NAME="iworkz-investor-website"
GITHUB_TOKEN="your_token_here"  # Replace with your actual token

# Get issues
echo "📋 OPEN ISSUES:"
curl -s -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/issues?state=open" | \
  grep '"title"' | cut -d'"' -f4 | sed 's/^/ • /'

echo ""
echo "🔄 OPEN PULL REQUESTS:"
curl -s -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/pulls?state=open" | \
  grep '"title"' | cut -d'"' -f4 | sed 's/^/ • /'

echo ""

# Count issues and PRs
issue_count=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/issues?state=open" | grep -c '"title"')
pr_count=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/pulls?state=open" | grep -c '"title"')

echo "✅ SUMMARY: $issue_count open issues, $pr_count open PRs"
echo "========================================"
