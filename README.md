# 🌱 STORY

## 💡 Inspiration

Buildings consume a massive share of global energy, yet most energy tools stop at dashboards. They answer "What happened?", not "What should we do next?"

During research, we noticed that:
- Facility managers often know energy is being wasted
- But lack decision-ready insights
- And almost never get quantified environmental impact

GridWise AI was inspired by the need to move from monitoring → optimization → measurable impact.

## ⚡ What it does

GridWise AI is an AI-powered decision support system for sustainable buildings.

It:
- Analyzes building energy usage data
- Predicts peak demand and inefficiencies
- Simulates optimized scheduling scenarios
- Quantifies energy savings, cost reduction, and CO2 avoided
- Explains why each recommendation works in plain language

Instead of static charts, users get actionable, explainable recommendations.

## 🛠️ How we built it

**System Architecture (High-Level)**

1. **Data Ingestion**
   - CSV-based building energy datasets (extensible to IoT streams)
   - Stored in PostgreSQL via Supabase

2. **AI Optimization Engine**
   - Time-series demand forecasting (lightweight LSTM / heuristics)
   - Rule-based + data-driven inefficiency detection
   - Scenario simulation for optimized schedules

3. **Impact Analysis**
   - Energy savings (%)
   - Cost reduction ($)
   - Carbon emissions avoided (kg CO2)

4. **Explainability Layer**
   - LLM generates human-readable reasoning
   - Each recommendation is auditable and transparent

5. **Frontend Dashboard**
   - Clean React + TypeScript UI
   - Focused on clarity, not data overload

## 🚧 Challenges we ran into

- Designing AI that feels trustworthy, not "magic"
- Balancing accuracy vs speed for live demo constraints
- Making sustainability impact numerical, not vague
- Avoiding overfitting to a single dataset
- Explaining AI decisions clearly within a 2-minute demo window

## Accomplishments that we're proud of

- Built a fully explainable AI system, not a black box
- Quantified real-world impact (energy, cost, carbon)
- Delivered a clear live demo flow judges can understand instantly
- Focused on decision support, not flashy automation
- Designed a system extensible to real smart-grid deployments

## What we learned

- Explainability matters more than raw prediction accuracy
- Sustainability tools must speak the language of operations and finance
- Small efficiency gains scale into massive environmental impact
- AI is most powerful when paired with clear decision logic
- Judges value clarity and realism over buzzwords

## What's next for GridWise AI

- Real-time IoT and smart meter integration
- Carbon-aware scheduling based on grid emission intensity
- Multi-building and campus-level optimization
- Automated ESG and sustainability reporting
- Integration with demand-response and utility pricing APIs
