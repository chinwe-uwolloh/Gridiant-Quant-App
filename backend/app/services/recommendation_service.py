class RecommendationService:
    def rank(self, recommendations: list[dict], acceptance_bias: float = 0.2) -> list[dict]:
        return sorted(recommendations, key=lambda r: r.get('expected_savings', 0) * (1 + acceptance_bias * r.get('historical_acceptance', 0)), reverse=True)
