namespace Gridiant.Quantum {
    open Microsoft.Quantum.Canon;
    open Microsoft.Quantum.Math;

    function ScoreCost(choice : Int, prices : Int[]) : Int {
        return prices[choice];
    }

    operation BinaryDecisionBlockSelector(candidates : Int[], baseline : Int) : Int {
        if (Length(candidates) == 0) {
            return baseline;
        }
        mutable best = candidates[0];
        for c in candidates {
            if (c < best) {
                set best = c;
            }
        }
        return best;
    }

    operation SmallConstrainedSearch(candidates : Int[], prices : Int[]) : Int {
        if (Length(candidates) == 0) {
            return 0;
        }
        mutable bestChoice = candidates[0];
        mutable bestScore = prices[candidates[0]];
        for c in candidates {
            let score = ScoreCost(c, prices);
            if (score < bestScore) {
                set bestChoice = c;
                set bestScore = score;
            }
        }
        return bestChoice;
    }

    operation ReducedSchedulingKernel(candidates : Int[], baseline : Int, prices : Int[]) : Int {
        let anchor = BinaryDecisionBlockSelector(candidates, baseline);
        let candidate = SmallConstrainedSearch(candidates, prices);
        if (prices[candidate] <= prices[anchor]) {
            return candidate;
        }
        return anchor;
    }

    operation EstimatorCompatibleKernel(problemSize : Int) : Int {
        mutable accumulator = 0;
        for i in 1..problemSize {
            set accumulator += i;
        }
        return accumulator;
    }
}
