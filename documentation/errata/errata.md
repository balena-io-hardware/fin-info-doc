![Fin logo](https://github.com/balena-io/balena-fin/raw/master/documentation/assets/balenaFin_logo.png)

| **Document Type** | Errata |
| --- | --- |
| **Product ID:** | BLNFN100001 (20173009) |
| **Product Name** | balenaFin |
| **Document Version** | 0.0.1 |
| **Author** | Nicolas Tzovanis |
| **State (Draft/Proposed/Approved)** | Draft |

## Errata history


| **Errata #** | **Date (dd/mm/yyyy)** | **Description** | **Author** | **Impact** |  
| --- | --- | --- | --- | --- | --- |  
| 1 | 09/12/2018 | Environment operating temperature range | Nicolas Tzovanis | Information |

Impact Definition: each erratum is marked with an impact, as defined below:

- Minor: workaround exists.
- Major: errata that do not conform to the data sheet or standard.
- Information: the device behavior is not ideal but acceptable. Typically, the data sheet will be
changed to match the device behavior.

## Errata Details

1. **Description:** balenaFin data sheet v0.0.4 states that the working temperature range is -25°C to 70°C. The real environmental working temperature range is 0°C to 70°C.  
**Impacts:** Whole board at low environment temperatures.
**Workaround:** None.  
**Resolution:** The next revision of the data sheet, revision 0.0.5, will include a new specification for the valid temperature range.
