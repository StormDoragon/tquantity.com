import { Octokit } from "@octokit/rest";
import axios from "axios";
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
// Grok: Pull trends from X
async function getTrends() {
  const { data } = await axios.post("https://api.x.ai/grok", { query: "scrape X trends" }, {
    headers: { Authorization: `Bearer ${process.env.XAI_API_KEY}` }
  });
  return data;
}
// GPT: Generate code/fixes
async function generateFix(comment) {
  const { data } = await axios.post("https://api.openai.com/v1/chat/completions", {
    model: "gpt-4", messages: [{ role: "user", content: `Fix: ${comment}` }]
  }, { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } });
  return data.choices[0].message.content;
}
// Handle issues
async function handleIssue() {
  const issue = await octokit.issues.get({ owner: "StormDoragon", repo: "tquantity.com", issue_number: 1 });
  const fix = await generateFix(issue.data.body);
  await octokit.issues.createComment({ owner: "StormDoragon", repo: "tquantity.com", issue_number: 1, body: fix });
}
handleIssue();
