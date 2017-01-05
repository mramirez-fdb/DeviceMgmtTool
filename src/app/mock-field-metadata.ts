export const fieldMetadata = [
    {
        Id: 28, 
        DataTyp: 1,
        "DspNm": "Alternative Brand Name",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "alternative_brand_name",
        "Oprs": [
            { "Id": 77, "Pramzd": false, "Opr": 4, "OprDspNm": "Full Search" },
            { "Id": 76, "Pramzd": true, "Opr": 3, "OprDspNm": "Contains" },
            { "Id": 75, "Pramzd": true, "Opr": 2, "OprDspNm": "Starts With" },
            { "Id": 74, "Pramzd": true, "Opr": 1, "OprDspNm": "Equals" }],
        "TblSrc": 1,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0, 
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null, 
        "FcsDaVaFld": null,
        "ClassPropertyName": "AltBrndNm"
    },
    {
        "Id": 29,
        "DataTyp": 1,
        "DspNm": "Alternative Description",
        "IsCrtriaFld": false,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "alternative_description",
        "Oprs": [
            { "Id": 81, "Pramzd": true, "Opr": 2, "OprDspNm": "Starts With" },
            { "Id": 80, "Pramzd": true, "Opr": 1, "OprDspNm": "Equals" },
            { "Id": 79, "Pramzd": false, "Opr": 4, "OprDspNm": "Full Search" },
            { "Id": 78, "Pramzd": true, "Opr": 3, "OprDspNm": "Contains" }],
        "TblSrc": 1,
        "FldCntntSrc": 4, //1
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "AltDesc"
    },
    {
        "Id": 0,
        "DataTyp": 7,
        "DspNm": "Audit",
        "IsCrtriaFld": false,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "Audit",
        "Oprs": [],
        "TblSrc": 1,
        "FldCntntSrc": 6, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "Audit",
        "IsSubObject": true
    },
    {
        "Id": 72,
        "DataTyp": 8,
        "DspNm": "Base Package Type",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "base_package_type",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 3,
        "FcsRstEndPnt": "packagetypes",
        "FcsHttpRqstTyp": 2,
        "FcsRoDaNm": "PackageTypes",
        "FcsDaTxtFld": "Desc",
        "FcsDaVaFld": "Id",
        "ClassPropertyName": "BasePkgTyp"
    },
    {
        "Id": 0,
        "DataTyp": 3,
        "DspNm": "Base Package Count",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "base_package_count",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "BasePkgCnt"
    },
    {
        "Id": 5,
        "DataTyp": 1,
        "DspNm": "Brand Name",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "brand_name",
        "Oprs": [
            {
                "Id": 22,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            },
            {
                "Id": 21,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 20,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 19,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "BrndNm"
    },
    {
        "Id": 6,
        "DataTyp": 1,
        "DspNm": "Brand Name",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "brand_name",
        "Oprs": [
            {
                "Id": 26,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 25,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 24,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 23,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "BrndNm",
        FormOrderMagnitude: 1
    },
    {
        "Id": 66,
        "DataTyp": 10,
        "DspNm": "Contact Infos",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "contact_infos",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 7, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "CntctInfos",
        IsSubArray: true
    },
    {
        "Id": 67,
        "DataTyp": 10,
        "DspNm": "Device Alternate Labelers",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "alt_device_labelers",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevAltLblrs",
        IsSubArray: true
    },
    {
        "Id": 61,
        "DataTyp": 10,
        "DspNm": "Device Alternate Names",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "alt_device_names",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevAltNms",
        IsSubArray: true
    },
    {
        "Id": 10,
        "DataTyp": 10,
        "DspNm": "Device Catalog Numbers",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "catalog_numbers_nbr",
        "Oprs": [
            {
                "Id": 38,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            },
            {
                "Id": 37,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 36,
                "Pramzd": false,
                "Opr": 3,
                "OprDspNm": "Contains"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevCatNbrs",
        IsSubArray: true
    },
    {
        "Id": 9,
        "DataTyp": 10,
        "DspNm": "Device Catalog Number",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "catalog_numbers_nbr",
        "Oprs": [
            {
                "Id": 35,
                "Pramzd": false,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 34,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 33,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevCatNbrs",
        IsSubArray: true
    },
    {
        "Id": 60,
        "DataTyp": 10,
        "DspNm": "Device Catalog Numbers",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "catalog_numbers",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevCatNbrs",
        IsSubArray: true
    },
    {
        "Id": 68,
        "DataTyp": 10,
        "DspNm": "Device Categories",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "device_categories",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 7, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevCats",
        IsSubArray: true
    },
    {
        "Id": 51,
        "DataTyp": 1,
        "DspNm": "Device Categories Name",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "device_categories_name",
        "Oprs": [
            {
                "Id": 127,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 126,
                "Pramzd": false,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 125,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 3,
        "FcsRstEndPnt": "devicecategories",
        "FcsHttpRqstTyp": 2,
        "FcsRoDaNm": "DevCats",
        "FcsDaTxtFld": "Nm",
        "FcsDaVaFld": "Id",
        "ClassPropertyName": "DevCats.Nm"
    },
    {
        "Id": 50,
        "DataTyp": 1,
        "DspNm": "Device Categories Name",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "device_categories_name",
        "Oprs": [
            {
                "Id": 124,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            },
            {
                "Id": 123,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 122,
                "Pramzd": false,
                "Opr": 3,
                "OprDspNm": "Contains"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 3,
        "FcsRstEndPnt": "devicecategories",
        "FcsHttpRqstTyp": 2,
        "FcsRoDaNm": "DevCats",
        "FcsDaTxtFld": "Nm",
        "FcsDaVaFld": "Id",
        "ClassPropertyName": "DevCats.Nm"
    },
    {
        "Id": 70,
        "DataTyp": 10,
        "DspNm": "Device FDA Product Codes",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "fda_product_codes",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 7, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevFDAPrdctCds",
        IsSubArray: true
    },
    {
        "Id": 69,
        "DataTyp": 10,
        "DspNm": "Device Hcpcs",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "hcpcs",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 7, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevHcpcs",
        IsSubArray: true
    },
    {
        "Id": 62,
        "DataTyp": 10,
        "DspNm": "Device MRI Safety List",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "mri_safety_list",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 7, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevMRISftyLst",
        IsSubArray: true
    },
    {
        "Id": 0,
        "DataTyp": 10,
        "DspNm": "Device Properties",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "device_properties",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 7, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevProps",
        IsSubArray: true
    },
    {
        "Id": 71,
        "DataTyp": 10,
        "DspNm": "Device Reference Properties",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "reference_properties",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 7, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevRefProps",
        IsSubArray: true
    },
    {
        "Id": 53,
        "DataTyp": 10,
        "DspNm": "Device Size",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "device_size_value",
        "Oprs": [
            {
                "Id": 131,
                "Pramzd": false,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 130,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 7, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevSz",
        IsSubArray: true
    },
    {
        "Id": 52,
        "DataTyp": 10,
        "DspNm": "Device Size",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "device_size_value",
        "Oprs": [
            {
                "Id": 129,
                "Pramzd": false,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 128,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 7, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevSz",
        IsSubArray: true
    },
    {
        "Id": 57,
        "DataTyp": 4,
        "DspNm": "Device Size Is Relevant Size",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "device_size_isrelvntsz",
        "Oprs": [
            {
                "Id": 139,
                "Pramzd": false,
                "Opr": 5,
                "OprDspNm": "Is Null"
            },
            {
                "Id": 138,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevSz.IsRelvntSz"
    },
    {
        "Id": 58,
        "DataTyp": 4,
        "DspNm": "Device Size Is Relevant Size",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "device_size_isrelvntsz",
        "Oprs": [
            {
                "Id": 141,
                "Pramzd": false,
                "Opr": 5,
                "OprDspNm": "Is Null"
            },
            {
                "Id": 140,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevSz.IsRelvntSz"
    },
    {
        "Id": 56,
        "DataTyp": 3,
        "DspNm": "Device Size Relevant Size Order",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "device_size_relvntszordr",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevSz.RelvntSzOrdr"
    },
    {
        "Id": 59,
        "DataTyp": 10,
        "DspNm": "Device Sizes",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "device_sizes",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevSz",
        IsSubArray: true
    },
    {
        "Id": 54,
        "DataTyp": 1,
        "DspNm": "Device Size Text",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "device_size_sztxt",
        "Oprs": [
            {
                "Id": 134,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            },
            {
                "Id": 133,
                "Pramzd": false,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 132,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 4, //1
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevSz.SzTxt"
    },
    {
        "Id": 55,
        "DataTyp": 1,
        "DspNm": "Device Size Text",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "device_size_sztxt",
        "Oprs": [
            {
                "Id": 137,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            },
            {
                "Id": 136,
                "Pramzd": false,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 135,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 4, //1
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevSz.SzTxt"
    },
    {
        "Id": 21,
        "DataTyp": 8,
        "DspNm": "Device Size Type",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "device_size_type_desc",
        "Oprs": [
            {
                "Id": 51,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 2,
        "FcsRstEndPnt": "devicesizetypes",
        "FcsHttpRqstTyp": 1,
        "FcsRoDaNm": "DeviceSizeTypes",
        "FcsDaTxtFld": "Desc",
        "FcsDaVaFld": "Id",
        "ClassPropertyName": "DevSz.DevSzType"
    },
    {
        "Id": 20,
        "DataTyp": 8,
        "DspNm": "Device Size Type",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "device_size_type_desc",
        "Oprs": [
            {
                "Id": 50,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 2,
        "FcsRstEndPnt": "devicesizetypes",
        "FcsHttpRqstTyp": 1,
        "FcsRoDaNm": "DeviceSizeTypes",
        "FcsDaTxtFld": "Desc",
        "FcsDaVaFld": "Id",
        "ClassPropertyName": "DevSz.DevSzType"
    },
    {
        "Id": 19,
        "DataTyp": 8,
        "DspNm": "Device Size UOM",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "device_size_uom",
        "Oprs": [
            {
                "Id": 49,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 2,
        "FcsRstEndPnt": "unitofmeasures",
        "FcsHttpRqstTyp": 1,
        "FcsRoDaNm": "UnitOfMeasures",
        "FcsDaTxtFld": "Desc",
        "FcsDaVaFld": "Id",
        "ClassPropertyName": "DevSz.UOM"
    },
    {
        "Id": 18,
        "DataTyp": 8,
        "DspNm": "Device Size UOM",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "device_size_uom",
        "Oprs": [
            {
                "Id": 48,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 2,
        "FcsRstEndPnt": "unitofmeasures",
        "FcsHttpRqstTyp": 1,
        "FcsRoDaNm": "UnitOfMeasures",
        "FcsDaTxtFld": "Desc",
        "FcsDaVaFld": "Id",
        "ClassPropertyName": "DevSz.UOM"
    },
    {
        "Id": 63,
        "DataTyp": 10,
        "DspNm": "Device Submissions",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "submissions",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DevSubs",
        IsSubArray: true
    },
    {
        "Id": 0,
        "DataTyp": 6,
        "DspNm": "Di Rec Pub Dt",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "DiRecPubDt",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DiRecPubDt"
    },
    {
        "Id": 0,
        "DataTyp": 4,
        "DspNm": "Does Req Strl Prior To Use",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "DoesReqStrlPriorToUse",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DoesReqStrlPriorToUse"
    },
    {
        "Id": 0,
        "DataTyp": 6,
        "DspNm": "Dt No Longer Dist",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "DtNoLongerDist",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "DtNoLongerDist"
    },
    {
        "Id": 0,
        "DataTyp": 6,
        "DspNm": "End Dt",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "EndDt",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "EndDt"
    },
    {
        "Id": 0,
        "DataTyp": 1,
        "DspNm": "Enhcd Dev Nm",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "EnhcdDevNm",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "EnhcdDevNm"
    },
    {
        "Id": 0,
        "DataTyp": 1,
        "DspNm": "Enhcd Dev Nm Lng",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "EnhcdDevNmLng",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 4, //1
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "EnhcdDevNmLng"
    },
    {
        "Id": 0,
        "DataTyp": 2,
        "DspNm": "FDB Prdct Id",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "FDBPrdctId",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "FDBPrdctId"
    },
    {
        "Id": 11,
        "DataTyp": 1,
        "DspNm": "External Identifier",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "external_med_device_id",
        "Oprs": [
            {
                "Id": 41,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 40,
                "Pramzd": false,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 39,
                "Pramzd": false,
                "Opr": 3,
                "OprDspNm": "Contains"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "LbldMedDevIdntfrs.ExtId"
    },
    {
        "Id": 12,
        "DataTyp": 8,
        "DspNm": "External Identifier Type Id",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "external_device_id_type_id",
        "Oprs": [
            {
                "Id": 42,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 2,
        "FcsRstEndPnt": "externalidtypes/",
        "FcsHttpRqstTyp": 1,
        "FcsRoDaNm": "ExtIdTypes",
        "FcsDaTxtFld": "ExtMedDevTypeNm",
        "FcsDaVaFld": "ExtMedDevTypeId",
        "ClassPropertyName": "LbldMedDevIdntfrs.ExtMedDevTypeId"
    },
    {
        "Id": 32,
        "DataTyp": 1,
        "DspNm": "Gudid Brand Name",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "gudid_brand_name",
        "Oprs": [
            {
                "Id": 93,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 92,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 91,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            },
            {
                "Id": 90,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "GudidBrndNm",
        FormOrderMagnitude: 3
    },
    {
        "Id": 33,
        "DataTyp": 1,
        "DspNm": "Gudid Brand Name",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "gudid_brand_name",
        "Oprs": [
            {
                "Id": 97,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 96,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            },
            {
                "Id": 95,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 94,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "GudidBrndNm",
        FormOrderMagnitude: 3
    },
    {
        "Id": 31,
        "DataTyp": 1,
        "DspNm": "Gudid Description",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "gudid_description",
        "Oprs": [
            {
                "Id": 89,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            },
            {
                "Id": 88,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 87,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 86,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 4, //1
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "GudidDesc",
        FormOrderMagnitude: 4
    },
    {
        "Id": 30,
        "DataTyp": 1,
        "DspNm": "Gudid Description",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "gudid_description",
        "Oprs": [
            {
                "Id": 85,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 84,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 83,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 82,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 4, //1
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "GudidDesc",
        FormOrderMagnitude: 4
    },
    {
        "Id": 34,
        "DataTyp": 1,
        "DspNm": "Gudid Version Model Number",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "gudid_version_model_number",
        "Oprs": [
            {
                "Id": 101,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 100,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 99,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            },
            {
                "Id": 98,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "GudidVerMdlNbr"
    },
    {
        "Id": 35,
        "DataTyp": 1,
        "DspNm": "Gudid Version Model Number",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "gudid_version_model_number",
        "Oprs": [
            {
                "Id": 105,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 104,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 103,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 102,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "GudidVerMdlNbr"
    },
    {
        "Id": 38,
        "DataTyp": 1,
        "DspNm": "Has Errors",
        "IsCrtriaFld": false,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "has_validation_errors",
        "Oprs": [],
        "TblSrc": 1,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": ""
    },
    {
        "Id": 39,
        "DataTyp": 1,
        "DspNm": "Has Errors",
        "IsCrtriaFld": false,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "has_validation_errors",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": ""
    },
    {
        "Id": 40,
        "DataTyp": 1,
        "DspNm": "Has Matches",
        "IsCrtriaFld": false,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "has_matches",
        "Oprs": [],
        "TblSrc": 1,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": ""
    },
    {
        "Id": 41,
        "DataTyp": 1,
        "DspNm": "Has Matches",
        "IsCrtriaFld": false,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "has_matches",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": ""
    },
    {
        "Id": 0,
        "DataTyp": 4,
        "DspNm": "Has Dntn Id Nbr",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "HasDntnIdNbr",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "HasDntnIdNbr"
    },
    {
        "Id": 0,
        "DataTyp": 4,
        "DspNm": "Has Exp Dt",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "HasExpDt",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "HasExpDt"
    },
    {
        "Id": 0,
        "DataTyp": 4,
        "DspNm": "Has Human Cells Or Tssu",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "HasHumanCellsOrTssu",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "HasHumanCellsOrTssu"
    },
    {
        "Id": 0,
        "DataTyp": 4,
        "DspNm": "Has Lot Or Btch Nbr",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "HasLotOrBtchNbr",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "HasLotOrBtchNbr"
    },
    {
        "Id": 0,
        "DataTyp": 4,
        "DspNm": "Has Mfg Dt",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "HasMfgDt",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "HasMfgDt"
    },
    {
        "Id": 0,
        "DataTyp": 4,
        "DspNm": "Has Serial Nbr",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "HasSerialNbr",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "HasSerialNbr"
    },
    {
        "Id": 0,
        "DataTyp": 2,
        "DspNm": "Id",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "Id",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "Id"
    },
    {
        "Id": 0,
        "DataTyp": 1,
        "DspNm": "Info Provdr GLN",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "InfoProvdrGLN",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "InfoProvdrGLN"
    },
    {
        "Id": 0,
        "DataTyp": 4,
        "DspNm": "Is Cbo Prdct",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "IsCboPrdct",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsCboPrdct"
    },
    {
        "Id": 0,
        "DataTyp": 4,
        "DspNm": "Is Dflt Stdrd Dev Nm",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "IsDfltStdrdDevNm",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsDfltStdrdDevNm"
    },
    {
        "Id": 0,
        "DataTyp": 4,
        "DspNm": "Is Drct Marking Exmpt",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "IsDrctMarkingExmpt",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsDrctMarkingExmpt"
    },
    {
        "Id": 0,
        "DataTyp": 4,
        "DspNm": "Is Fdb Flds KBS Valdt",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "IsFdbFldsKBSValdt",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsFdbFldsKBSValdt"
    },
    {
        "Id": 0,
        "DataTyp": 4,
        "DspNm": "Is Kit",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "IsKit",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsKit"
    },
    {
        "Id": 22,
        "DataTyp": 1,
        "DspNm": "HIBC",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "hibc",
        "Oprs": [
            {
                "Id": 54,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 53,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 52,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "SignfctHIBC"
    },
    {
        "Id": 23,
        "DataTyp": 1,
        "DspNm": "HIBC",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "hibc",
        "Oprs": [
            {
                "Id": 57,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 56,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 55,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 1,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "SignfctHIBC"
    },
    {
        "Id": 0,
        "DataTyp": 4,
        "DspNm": "Is Lbl As Not Made With Nat Rbbr Ltx",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "IsLblAsNotMadeWithNatRbbrLtx",
        "Oprs": [
            {
                "Id": 119,
                "Pramzd": false,
                "Opr": 5,
                "OprDspNm": "Is Null"
            },
            {
                "Id": 118,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsLblAsNotMadeWithNatRbbrLtx"
    },
    {
        "Id": 48,
        "DataTyp": 4,
        "DspNm": "Is Label Required Contain Natural Rubber Latex",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "is_lbld_req_cntn_nat_rubber_latex",
        "Oprs": [
            {
                "Id": 119,
                "Pramzd": false,
                "Opr": 5,
                "OprDspNm": "Is Null"
            },
            {
                "Id": 118,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsLblReqCntnNatRbbrLtx"
    },
    {
        "Id": 49,
        "DataTyp": 4,
        "DspNm": "Is Label Required Contain Natural Rubber Latex",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "is_lbld_req_cntn_nat_rubber_latex",
        "Oprs": [
            {
                "Id": 121,
                "Pramzd": false,
                "Opr": 5,
                "OprDspNm": "Is Null"
            },
            {
                "Id": 120,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsLblReqCntnNatRbbrLtx"
    },
    {
        "Id": 37,
        "DataTyp": 1,
        "DspNm": "Is OK",
        "IsCrtriaFld": false,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "is_ok",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": ""
    },
    {
        "Id": 36,
        "DataTyp": 1,
        "DspNm": "Is OK",
        "IsCrtriaFld": false,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "is_ok",
        "Oprs": [],
        "TblSrc": 1,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": ""
    },
    {
        "Id": 42,
        "DataTyp": 4,
        "DspNm": "Is Otc",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "is_otc",
        "Oprs": [
            {
                "Id": 107,
                "Pramzd": false,
                "Opr": 5,
                "OprDspNm": "Is Null"
            },
            {
                "Id": 106,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsOtc"
    },
    {
        "Id": 43,
        "DataTyp": 4,
        "DspNm": "Is Otc",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "is_otc",
        "Oprs": [
            {
                "Id": 109,
                "Pramzd": false,
                "Opr": 5,
                "OprDspNm": "Is Null"
            },
            {
                "Id": 108,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsOtc"
    },
    {
        "Id": 43,
        "DataTyp": 4,
        "DspNm": "Is Pkg As Strl",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "IsPkgAsStrl",
        "Oprs": [],
        "TblSrc": 1,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsPkgAsStrl"
    },
    {
        "Id": 43,
        "DataTyp": 4,
        "DspNm": "Is Pre Market Exmpt",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "IsPreMarketExmpt",
        "Oprs": [
        ],
        "TblSrc": 1,
        "FldCntntSrc": 2, //1
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsPreMarketExmpt"
    },
    {
        "Id": 45,
        "DataTyp": 4,
        "DspNm": "Is Rx",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "is_rx",
        "Oprs": [
            {
                "Id": 113,
                "Pramzd": false,
                "Opr": 5,
                "OprDspNm": "Is Null"
            },
            {
                "Id": 112,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 2, //1
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsRx"
    },
    {
        "Id": 44,
        "DataTyp": 4,
        "DspNm": "Is Rx",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "is_rx",
        "Oprs": [
            {
                "Id": 111,
                "Pramzd": false,
                "Opr": 5,
                "OprDspNm": "Is Null"
            },
            {
                "Id": 110,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsRx"
    },
    {
        "Id": 47,
        "DataTyp": 4,
        "DspNm": "Is Single Use",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "is_single_use",
        "Oprs": [
            {
                "Id": 117,
                "Pramzd": false,
                "Opr": 5,
                "OprDspNm": "Is Null"
            },
            {
                "Id": 116,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsSnglUse"
    },
    {
        "Id": 46,
        "DataTyp": 4,
        "DspNm": "Is Single Use",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "is_single_use",
        "Oprs": [
            {
                "Id": 115,
                "Pramzd": false,
                "Opr": 5,
                "OprDspNm": "Is Null"
            },
            {
                "Id": 114,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 2, //1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "IsSnglUse"
    },
    {
        "Id": 0,
        "DataTyp": 10,
        "DspNm": "Identifiers",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "LbldMedDevIdntfrs",
        "Oprs": [],
        "TblSrc": 1,
        "FldCntntSrc": 7, //3
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "LbldMedDevIdntfrs",
        IsSubArray: true
    },
    {
        "Id": 0,
        "DataTyp": 8,
        "DspNm": "Labeler",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "labeler_name",
        "Oprs": [],
        "TblSrc": 1,
        "FldCntntSrc": 3,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "Lblr",
        IsSubObject: true,
        FormOrderMagnitude: 2,
        IsRequired: true
    },
    {
        "Id": 2,
        "DataTyp": 1,
        "DspNm": "Labeler Name",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "labeler_name",
        "Oprs": [
            {
                "Id": 8,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 7,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 6,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            },
            {
                "Id": 5,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 3,
        "FcsRstEndPnt": "labeler/list/",
        "FcsHttpRqstTyp": 2,
        "FcsRoDaNm": "Labelers",
        "FcsDaTxtFld": "Nm",
        "FcsDaVaFld": "Id",
        "ClassPropertyName": "Lblr.Nm"
    },
    {
        "Id": 1,
        "DataTyp": 1,
        "DspNm": "Labeler Name",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "labeler_name",
        "Oprs": [
            {
                "Id": 4,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 3,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            },
            {
                "Id": 2,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 1,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 3,
        "FcsRstEndPnt": "labeler/list/",
        "FcsHttpRqstTyp": 2,
        "FcsRoDaNm": "Labelers",
        "FcsDaTxtFld": "Nm",
        "FcsDaVaFld": "Id",
        "ClassPropertyName": "Lblr.Nm"
    },
    {
        "Id": 13,
        "DataTyp": 1,
        "DspNm": "Lbld Med Dev Idntfrs Ext Id",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "exid",
        "Oprs": [
            {
                "Id": 43,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "LbldMedDevIdntfrs.ExtId"
    },
    {
        "Id": 26,
        "DataTyp": 1,
        "DspNm": "Model Number",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "model_number",
        "Oprs": [
            {
                "Id": 69,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 68,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 67,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 66,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "MdlNbr"
    },
    {
        "Id": 27,
        "DataTyp": 1,
        "DspNm": "Model Number",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "model_number",
        "Oprs": [
            {
                "Id": 73,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 72,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            },
            {
                "Id": 71,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 70,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "MdlNbr"
    },
    {
        "Id": 0,
        "DataTyp": 1,
        "DspNm": "Mfg GLN",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "MfgGLN",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "MfgGLN"
    },
    {
        "Id": 0,
        "DataTyp": 1,
        "DspNm": "Orgnl Lblr Nm",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "OrgnlLblrNm",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "OrgnlLblrNm"
    },
    {
        "Id": 0,
        "DataTyp": 10,
        "DspNm": "Pkg Med Devs",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "PkgMedDevs",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 7, //3
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "PkgMedDevs",
        "IsSubArray": true
    },
    {
        "Id": 16,
        "DataTyp": 2,
        "DspNm": "Prizm Id",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "prizm_id",
        "Oprs": [
            {
                "Id": 46,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 3,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "Id"
    },
    {
        "Id": 14,
        "DataTyp": 1,
        "DspNm": "Signfct GTIN",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "gtin",
        "Oprs": [
            {
                "Id": 44,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 3,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "SignfctGTIN"
    },
    {
        "Id": 17,
        "DataTyp": 1,
        "DspNm": "Signfct HIBC",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "hibc",
        "Oprs": [
            {
                "Id": 47,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 3,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "SignfctHIBC"
    },
    {
        "Id": 8,
        "DataTyp": 1,
        "DspNm": "Significant GTIN",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "gtin",
        "Oprs": [
            {
                "Id": 32,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 31,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 30,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "SignfctGTIN"
    },
    {
        "Id": 7,
        "DataTyp": 1,
        "DspNm": "Significant GTIN",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "gtin",
        "Oprs": [
            {
                "Id": 29,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 28,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 27,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "SignfctGTIN"
    },
    {
        "Id": 15,
        "DataTyp": 2,
        "DspNm": "Source Queue Id",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": false,
        "Nm": "lbld_med_device_in.source_queue_id",
        "Oprs": [
            {
                "Id": 45,
                "Pramzd": false,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "SourceQueueId"
    },
    {
        "Id": 4,
        "DataTyp": 1,
        "DspNm": "Standard Device Name",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "standard_device_name",
        "Oprs": [
            {
                "Id": 18,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 17,
                "Pramzd": false,
                "Opr": 5,
                "OprDspNm": "Is Null"
            },
            {
                "Id": 16,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 15,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 14,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "StdrdDevNm",
        FormOrderMagnitude: 4,
        IsRequired: true
    },
    {
        "Id": 3,
        "DataTyp": 1,
        "DspNm": "Standard Device Name",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "standard_device_name",
        "Oprs": [
            {
                "Id": 13,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 12,
                "Pramzd": false,
                "Opr": 5,
                "OprDspNm": "Is Null"
            },
            {
                "Id": 11,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 10,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            },
            {
                "Id": 9,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 2,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "StdrdDevNm",
        FormOrderMagnitude: 4,
        IsRequired: true
    },
    {
        "Id": 64,
        "DataTyp": 10,
        "DspNm": "Sterilization Methods",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "sterilization_methods",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 7, //3
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "StrlMthds",
        "IsSubArray": true
    },
    {
        "Id": 65,
        "DataTyp": 10,
        "DspNm": "Storage Handlings",
        "IsCrtriaFld": false,
        "IsUpdFld": true,
        "IsSrtFld": false,
        "Nm": "storage_handlings",
        "Oprs": [],
        "TblSrc": 2,
        "FldCntntSrc": 7, //3
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "StorHdlng",
        "IsSubArray": true
    },
    {
        "Id": 24,
        "DataTyp": 1,
        "DspNm": "Version Number",
        "IsCrtriaFld": true,
        "IsUpdFld": false,
        "IsSrtFld": true,
        "Nm": "version_number",
        "Oprs": [
            {
                "Id": 61,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            },
            {
                "Id": 60,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            },
            {
                "Id": 59,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 58,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            }
        ],
        "TblSrc": 1,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "VerNbr",
        FormOrderMagnitude: 6
    },
    {
        "Id": 25,
        "DataTyp": 1,
        "DspNm": "Version Number",
        "IsCrtriaFld": true,
        "IsUpdFld": true,
        "IsSrtFld": true,
        "Nm": "version_number",
        "Oprs": [
            {
                "Id": 65,
                "Pramzd": true,
                "Opr": 2,
                "OprDspNm": "Starts With"
            },
            {
                "Id": 64,
                "Pramzd": true,
                "Opr": 1,
                "OprDspNm": "Equals"
            },
            {
                "Id": 63,
                "Pramzd": false,
                "Opr": 4,
                "OprDspNm": "Full Search"
            },
            {
                "Id": 62,
                "Pramzd": true,
                "Opr": 3,
                "OprDspNm": "Contains"
            }
        ],
        "TblSrc": 2,
        "FldCntntSrc": 1,
        "FcsRstEndPnt": null,
        "FcsHttpRqstTyp": 0,
        "FcsRoDaNm": null,
        "FcsDaTxtFld": null,
        "FcsDaVaFld": null,
        "ClassPropertyName": "VerNbr",
        FormOrderMagnitude: 6
    }
];