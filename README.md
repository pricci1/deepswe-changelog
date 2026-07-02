# DeepSWE changelog

This repository tracks changes to the published DeepSWE benchmark results.

> **Original source:** DeepSWE is published by DataCurve at [deepswe.datacurve.ai](https://deepswe.datacurve.ai). Please visit the original site for the canonical benchmark presentation and context.

A scheduled GitHub workflow runs `bun run scrape`, normalizes the public artifact JSON, and commits only when result data changes.

## Charts

### DeepSWE score vs average cost

```mermaid
quadrantChart
    title DeepSWE score vs average cost per task
    x-axis Higher avg cost --> Lower avg cost
    y-axis Lower pass at 1 --> Higher pass at 1
    quadrant-1 Most efficient
    quadrant-2 Higher score / higher cost
    quadrant-3 Lower score / higher cost
    quadrant-4 Lower score / lower cost
    claude-fable-5 xhigh: [0.492, 0.699]
    claude-fable-5 max: [0.18, 0.697]
    claude-fable-5 high: [0.652, 0.686]
    gpt-5-5 xhigh: [0.726, 0.67]
    claude-fable-5 medium: [0.769, 0.654]
    gpt-5-5 high: [0.807, 0.644]
    claude-fable-5 low: [0.858, 0.596]
    claude-opus-4-8 max: [0.499, 0.59]
    claude-opus-4-8 xhigh: [0.697, 0.544]
    gpt-5-5 medium: [0.896, 0.54]
    claude-sonnet-5 max: [0, 0.538]
    claude-opus-4-8 high: [0.838, 0.518]
    gpt-5-4 xhigh: [0.786, 0.518]
    claude-sonnet-5 xhigh: [0.55, 0.497]
    claude-opus-4-8 medium: [0.87, 0.487]
    claude-sonnet-5 high: [0.719, 0.482]
    glm-5-2 max: [0.852, 0.438]
    claude-opus-4-8 low: [0.913, 0.408]
    claude-sonnet-5 medium: [0.845, 0.398]
    gemini-3-5-flash medium: [0.722, 0.374]
    glm-5-2 high: [0.893, 0.363]
    kimi-k2-7-code: [0.893, 0.305]
    claude-sonnet-5 low: [0.917, 0.305]
    claude-sonnet-4-6 high: [0.791, 0.299]
    gpt-5-5 low: [0.955, 0.27]
    gemini-3-1-pro-preview high: [0.641, 0.118]
```

### pass@1 leaderboard

```mermaid
xychart-beta
    title "DeepSWE pass@1 leaderboard"
    x-axis ["claude-fable-5 [xhigh]", "claude-fable-5 [max]", "claude-fable-5 [high]", "gpt-5-5 [xhigh]", "claude-fable-5 [medium]", "gpt-5-5 [high]", "claude-fable-5 [low]", "claude-opus-4-8 [max]", "claude-opus-4-8 [xhigh]", "gpt-5-5 [medium]", "claude-sonnet-5 [max]", "claude-opus-4-8 [high]", "gpt-5-4 [xhigh]", "claude-sonnet-5 [xhigh]", "claude-opus-4-8 [medium]", "claude-sonnet-5 [high]", "glm-5-2 [max]", "claude-opus-4-8 [low]", "claude-sonnet-5 [medium]", "gemini-3-5-flash [medium]", "glm-5-2 [high]", "kimi-k2-7-code", "claude-sonnet-5 [low]", "claude-sonnet-4-6 [high]", "gpt-5-5 [low]", "gemini-3-1-pro-preview [high]"]
    y-axis "pass at 1 (%)" 0 --> 80
    bar [69.9, 69.7, 68.6, 67.0, 65.4, 64.4, 59.6, 59.0, 54.4, 54.0, 53.8, 51.8, 51.8, 49.7, 48.7, 48.2, 43.8, 40.8, 39.8, 37.4, 36.3, 30.5, 30.5, 29.9, 27.0, 11.8]
```

## Leaderboard

| Model | Config | Effort | Pass@1 | Passed | Attempts | Avg cost | Avg steps |
| --- | --- | --- | --- | --- | --- | --- | --- |
| claude-fable-5 | mini_swe_agent_claude_fable_5_xhigh | xhigh | 69.9% | 316 | 452 | $13.41 | 68.4 |
| claude-fable-5 | mini_swe_agent_claude_fable_5_max | max | 69.7% | 304 | 436 | $21.63 | 88.43 |
| claude-fable-5 | mini_swe_agent_claude_fable_5_high | high | 68.6% | 295 | 430 | $9.18 | 58.74 |
| gpt-5-5 | mini_swe_agent_gpt_5_5_xhigh | xhigh | 67.0% | 303 | 452 | $7.23 | 82.02 |
| claude-fable-5 | mini_swe_agent_claude_fable_5_medium | medium | 65.4% | 285 | 436 | $6.09 | 48.37 |
| gpt-5-5 | mini_swe_agent_gpt_5_5_high | high | 64.4% | 291 | 452 | $5.10 | 61.92 |
| claude-fable-5 | mini_swe_agent_claude_fable_5_low | low | 59.6% | 258 | 433 | $3.76 | 37.8 |
| claude-opus-4-8 | mini_swe_agent_claude_opus_4_8_max | max | 59.0% | 253 | 429 | $13.22 | 120 |
| claude-opus-4-8 | mini_swe_agent_claude_opus_4_8_xhigh | xhigh | 54.4% | 243 | 447 | $8.01 | 94.64 |
| gpt-5-5 | mini_swe_agent_gpt_5_5_medium | medium | 54.0% | 244 | 452 | $2.75 | 45.98 |
| claude-sonnet-5 | mini_swe_agent_claude_sonnet_5_max | max | 53.8% | 238 | 442 | $26.40 | 268.45 |
| claude-opus-4-8 | mini_swe_agent_claude_opus_4_8_high | high | 51.8% | 234 | 452 | $4.28 | 72.5 |
| gpt-5-4 | mini_swe_agent_gpt_5_4_xhigh | xhigh | 51.8% | 234 | 452 | $5.65 | 70.47 |
| claude-sonnet-5 | mini_swe_agent_claude_sonnet_5_xhigh | xhigh | 49.7% | 224 | 451 | $11.89 | 185.53 |
| claude-opus-4-8 | mini_swe_agent_claude_opus_4_8_medium | medium | 48.7% | 220 | 452 | $3.44 | 65.57 |
| claude-sonnet-5 | mini_swe_agent_claude_sonnet_5_high | high | 48.2% | 218 | 452 | $7.43 | 146.58 |
| glm-5-2 | mini_swe_agent_glm_5_2_max | max | 43.8% | 197 | 450 | $3.92 | 129.13 |
| claude-opus-4-8 | mini_swe_agent_claude_opus_4_8_low | low | 40.8% | 184 | 451 | $2.29 | 53.98 |
| claude-sonnet-5 | mini_swe_agent_claude_sonnet_5_medium | medium | 39.8% | 179 | 450 | $4.08 | 107.61 |
| gemini-3-5-flash | mini_swe_agent_gemini_3_5_flash_medium | medium | 37.4% | 169 | 452 | $7.34 | 85.72 |
| glm-5-2 | mini_swe_agent_glm_5_2_high | high | 36.3% | 164 | 452 | $2.84 | 121.88 |
| kimi-k2-7-code | mini_swe_agent_kimi_k2_7_code_default |  | 30.5% | 138 | 452 | $2.82 | 149.12 |
| claude-sonnet-5 | mini_swe_agent_claude_sonnet_5_low | low | 30.5% | 137 | 449 | $2.19 | 76.89 |
| claude-sonnet-4-6 | mini_swe_agent_claude_sonnet_4_6_high | high | 29.9% | 135 | 451 | $5.52 | 133.66 |
| gpt-5-5 | mini_swe_agent_gpt_5_5_low | low | 27.0% | 122 | 452 | $1.20 | 28.07 |
| gemini-3-1-pro-preview | mini_swe_agent_gemini_3_1_pro_preview_high | high | 11.8% | 53 | 451 | $9.48 | 81.39 |

See [the full generated data report](data/README.md) for release metadata, v1.1 delta, task coverage, and raw snapshot links.
