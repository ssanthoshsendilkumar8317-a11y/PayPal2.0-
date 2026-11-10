# PAYPAL 2.0
### AI-Powered Financial Trust Intelligence
> **"Trust Before Transactions. Intelligence Behind Every Payment."**

An institutional-grade financial technology platform that introduces an autonomous multi-agent verification and risk governance layer *before* money moves through payment rails like PayPal Orders API v2.

---

## 🏛️ Executive Summary

Traditional payment gateways operate post-facto: money moves first, and fraud detection flags issues retrospectively. Reversing unauthorized or fraudulent disbursements requires chargebacks, litigation, and significant administrative costs.

**PAYPAL 2.0** solves this by inserting an AI-powered trust layer prior to transaction commitment. Seven specialized AI agents cross-examine identity credentials, analyze fulfillment history, calculate multi-vector risk metrics, challenge the assessment with adversarial red-teaming, and verify deterministic spending policies before an authorized signatory releases funds to the payment rail.

---

## 🎨 Design System

- **Primary Background**: `#F7F7F5`, `#F2F2EF`
- **Card Background**: `#FFFFFF`
- **Primary Text**: `#191919`
- **Secondary Text**: `#737373`
- **Borders**: `#E7E7E5`
- **Primary Accent**: `#273B53` (Institutional Slate/Navy)
- **Secondary Accent**: `#68788A`
- **Financial Status Indicators**:
  - Success: `#27845A` (Forest Green)
  - Warning: `#C58A35` (Muted Amber)
  - Danger: `#C64C4C` (Subdued Red)
  - Muted: `#A3A3A3`
- **Typography**: Inter & Geist with tabular financial numbers.
- **Visual Style**: Minimalist, subtle shadows, 10–14px rounded corners, crisp Recharts visualizations.

---

## 🧭 Complete Application Structure (11 Pages)

| # | Page | Description |
|---|---|---|
| 1 | **Landing Page** | Institutional public introduction with interactive product dashboard preview, problem vs. solution analysis, 7-agent workflow comparison, and security assurance. |
| 2 | **Login / Registration** | Corporate authentication portal with enterprise SSO, instant evaluator sign-in, and Supabase integration readiness. |
| 3 | **Main Dashboard** | Executive overview featuring 4 primary metric cards, Trust Distribution pie chart, Transaction Risk Overview bar chart, 7-day Activity area chart, and recent transaction log. |
| 4 | **Trust Intelligence Workspace** | Interactive assessment runner with counterparty parameters, evidence document manager, live 7-agent execution telemetry console, and explainability breakdown (positive, risk, and safeguards). |
| 5 | **Counterparty Management** | Institutional directory covering Individuals, Businesses, and AI Autonomous Agents with deep-dive modal profiles and registration workflow. |
| 6 | **Transaction Management** | Full transaction lifecycle table with status tabs (All, Pending, Approved, Under Review, Completed, Failed), modal inspection, and signatory authorization triggers. |
| 7 | **AI Agent Intelligence** | Central interactive LangGraph DAG schematic visualizer, individual agent specs (duration, status, findings count), and manual scenario prompt stress-tester. |
| 8 | **Risk Analytics** | Quantitative risk intelligence with risk trend lines over time, top intercepted risk indicator progress bars, and high-threat activity log. |
| 9 | **Payment Management** | Dedicated PayPal Sandbox Orders API v2 gateway featuring connection status, 7-stage lifecycle progression timeline, and order creation & capture modal simulator. |
| 10 | **Decision Audit Trail** | Immutable chronological ledger logging every agent dispatch, evidence receipt, adversarial challenge, and signatory action with copyable SHA-256 hashes. |
| 11 | **Settings & API Configuration** | API key manager (OpenRouter with show/hide masking), AI model selector (`liquid/lfm-3-1.7b:free`, `meta-llama/llama-3.2-3b-instruct:free`, `openai/gpt-4o-mini`), PayPal Sandbox credentials, and compliance notification settings. |

---

## 🤖 The 7 Specialized AI Agents (LangGraph Architecture)

```
                     SUPERVISOR AGENT
                            |
            +---------------+---------------+
            |               |               |
            v               v               v
     IDENTITY AGENT  TRANSACTION AGENT  RISK AGENT
            |               |               |
            +---------------+---------------+
                            |
                            v
                  TRUST EVALUATION AGENT
                            |
                            v
                ADVERSARIAL RED-TEAM AGENT
                            |
                            v
                   PAYMENT POLICY AGENT
                            |
                            v
                     FINAL DECISION
         (APPROVE_PAYMENT / MANUAL_REVIEW / REJECT)
```

1. **Supervisor Agent**: LangGraph DAG orchestrator that compiles the execution graph, delegates parallel streams, and synthesizes final explainable decisions.
2. **Identity Intelligence Agent**: Corroborates commercial registries (LEI codes, Handelsregister, Companies House), cryptographic signatures, and biometric KYC data.
3. **Transaction Intelligence Agent**: Evaluates historical fulfillment rate (e.g. 99.8%), settlement dispute frequency, and volume velocity deviations.
4. **Risk Assessment Agent**: Scans multi-vector threat indicators including OFAC/EU sanctions, politically exposed persons (PEP), and offshore shell structures.
5. **Trust Evaluation Agent**: Computes a Bayesian calibrated 0–100 Trust Score with statistical confidence and evidence coverage intervals.
6. **Adversarial Intelligence Agent**: Acts as devil's advocate red-team challenger probing for invoice tampering, domain typosquatting, and circular routing.
7. **Payment Policy Agent**: Deterministic rules engine enforcing hard enterprise spend caps, dual-signatory mandates, and regulatory thresholds.

---

## 💳 Payment Lifecycle Progression

1. **Transaction Created**: Tranche parameters and purpose submitted.
2. **Trust Assessment Completed**: Multi-agent consensus calculated.
3. **Risk Evaluation Completed**: Sanctions and anomaly threat modeled.
4. **Policy Evaluation**: Deterministic spending rules verified.
5. **User Authorization**: Chief Risk Officer / Treasury Signatory sign-off.
6. **PayPal Checkout**: PayPal Orders API v2 order payload created.
7. **Payment Confirmation**: Order captured in PayPal Sandbox and logged to immutable audit ledger.

---

## 🚀 Running the Project

### Frontend (React + TypeScript + Vite + Tailwind CSS)
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build
```

### Python FastAPI + LangGraph Backend
```bash
# 1. Navigate to backend directory
cd backend

# 2. Install requirements
pip install -r requirements.txt

# 3. Start the FastAPI service
uvicorn main:app --reload --port 8000
```

---

## 🔒 Security & Compliance

- **No Secrets in Frontend**: API keys and secrets are handled securely without exposing credentials in client bundle responses.
- **Cryptographic Audit Log**: Every evaluation produces a SHA-256 hash receipt for regulatory compliance.
- **Strict Distinction**: Demonstrations and sandbox responses are clearly labelled to prevent confusing recommendations with payment authorization.
