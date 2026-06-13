# DeepSWE changelog

This repository tracks changes to the published DeepSWE benchmark results.

> **Original source:** DeepSWE is published by DataCurve at [deepswe.datacurve.ai](https://deepswe.datacurve.ai). Please visit the original site for the canonical benchmark presentation and context.

A scheduled GitHub workflow runs `bun run scrape`, normalizes the public artifact JSON, and commits only when result data changes.

## Leaderboard

| Model | Config | pass@1 | pass@4 | Passed | Attempts | Tasks | Median cost | Median steps |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| gpt-5-5 | mini_swe_agent_gpt_5_5_xhigh | 70.0% | 88.3% | 311 | 444 | 111 | $5.76 | 75 |
| gpt-5-4 | mini_swe_agent_gpt_5_4_xhigh | 55.5% | 77.0% | 251 | 452 | 113 | $3.31 | 62 |
| claude-opus-4-7 | mini_swe_agent_claude_opus_4_7_max | 54.2% | 85.8% | 245 | 452 | 113 | $15.95 | 191 |
| claude-sonnet-4-6 | mini_swe_agent_claude_sonnet_4_6_high | 31.6% | 61.9% | 142 | 447 | 113 | $4.75 | 121 |
| gemini-3-5-flash | mini_swe_agent_gemini_3_5_flash_medium | 28.3% | 56.6% | 128 | 452 | 113 | $5.67 | 71 |
| claude-opus-4-6 | mini_swe_agent_claude_opus_4_6_max | 27.1% | 50.4% | 122 | 442 | 113 | $4.66 | 94 |
| gpt-5-4-mini | mini_swe_agent_gpt_5_4_mini_xhigh | 24.3% | 46.0% | 110 | 452 | 113 | $2.03 | 83 |
| kimi-k2-6 | mini_swe_agent_kimi_k2_6_default | 23.9% | 48.7% | 108 | 452 | 113 | $2.70 | 136.5 |
| mimo-v2-5-pro | mini_swe_agent_mimo_v2_5_pro_default | 19.5% | 45.1% | 88 | 452 | 113 | $1.68 | 114.5 |
| glm-5-1 | mini_swe_agent_glm_5_1_default | 17.5% | 38.9% | 79 | 451 | 113 | $6.70 | 168 |
| gemini-3-1-pro-preview | mini_swe_agent_gemini_3_1_pro_preview_default | 9.9% | 24.8% | 43 | 442 | 113 | $1.52 | 67 |
| deepseek-v4-pro | mini_swe_agent_deepseek_v4_pro_default | 7.5% | 18.6% | 34 | 452 | 113 | $3.54 | 103.5 |
| gemini-3-flash-preview | mini_swe_agent_gemini_3_flash_preview_default | 5.2% | 15.0% | 22 | 428 | 113 | $1.04 | 54 |
| qwen3-6-plus | mini_swe_agent_qwen3_6_plus_default | 2.7% | 9.7% | 12 | 452 | 113 | $3.61 | 158 |
| claude-haiku-4-5 | mini_swe_agent_claude_haiku_4_5_default | 0.2% | 0.9% | 1 | 452 | 113 | $0.78 | 103 |
| minimax-m2-7 | mini_swe_agent_minimax_m2_7_default | 0.2% | 0.9% | 1 | 452 | 113 | $0.54 | 116 |

See [the full generated data report](data/README.md) for comparisons, model behavior aggregates, verification behavior, critiques, corpus stats, repositories, and raw snapshot links.
