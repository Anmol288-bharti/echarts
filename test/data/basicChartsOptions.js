// Basic options for all charts
window.allChartsOptions = [
    ////////////// Hightlight multilple series(blurScope = 'series') //////////////
    {
        id: "highlightMultipleSeries(blurScope='series')",
        name: "Dispatch action to hightlight multiple series (with blurScope == 'series')",
        legend: {
            top: 30,
            data: [
                "Direct",
                "Mail Ad",
                "Affiliate Ad",
                "Video Ad",
                "Search Engine",
            ],
        },
        xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                name: "Direct",
                type: "line",
                label: {
                    show: true,
                },
                emphasis: {
                    blurScope: "series",
                    lineStyle: {
                        width: 5,
                    },
                },
                data: [320, 302, 301, 334, 390, 330, 320],
            },
            {
                name: "Mail Ad",
                type: "line",
                label: {
                    show: true,
                },
                emphasis: {
                    blurScope: "series",
                    lineStyle: {
                        width: 5,
                    },
                },
                data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
                name: "Affiliate Ad",
                type: "line",
                label: {
                    show: true,
                },
                emphasis: {
                    blurScope: "series",
                    lineStyle: {
                        width: 5,
                    },
                },
                data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
                name: "Video Ad",
                type: "line",
                label: {
                    show: true,
                },
                emphasis: {
                    blurScope: "series",
                    lineStyle: {
                        width: 5,
                    },
                },
                data: [150, 212, 201, 154, 190, 330, 410],
            },
        ],
    },
    ////////////// Hightlight multilple series(blurScope != 'series') //////////////
    {
        id: "highlightMultipleSeries(blurScope!='series')",
        name: "Dispatch action to hightlight multiple series (with blurScope != 'series')",
        legend: {
            top: 30,
            data: [
                "Direct",
                "Mail Ad",
                "Affiliate Ad",
                "Video Ad",
                "Search Engine",
            ],
        },
        xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                name: "Direct",
                type: "line",
                label: {
                    show: true,
                },
                data: [320, 302, 301, 334, 390, 330, 320],
            },
            {
                name: "Mail Ad",
                type: "line",
                label: {
                    show: true,
                },
                data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
                name: "Affiliate Ad",
                type: "line",
                label: {
                    show: true,
                },
                data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
                name: "Video Ad",
                type: "line",
                label: {
                    show: true,
                },
                data: [150, 212, 201, 154, 190, 330, 410],
            },
        ],
    },
    ////////////////////////// Area stacks //////////////////////////////
    {
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                label: { show: true },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                label: { show: true },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                label: { show: true },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                label: { show: true },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                label: { show: true },
                areaStyle: {},
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    },

    ////////////////////////// Large line ///////////////////////////////
    (function () {
        var option = {
            legend: {
                data: []
            },
            dataZoom: [{
                show: true,
                realtime: true,
                // showDataShadow: false,
                start: 50,
                end: 60
            }],
            xAxis: [{
                type: 'time'
            }],
            yAxis: [{
                type: 'value'
            }],
            series: []
        };

        var date = [];
        var oneDay = 24 * 3600 * 1000;
        var base = +new Date(1897, 9, 3);
        for (var j = 0; j < 1e3; j++) {
            var now = new Date(base += oneDay);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'));
        }
        for (var i = 0; i < 30; i++) {
            var y = Math.random() * 1000;
            var values = [];
            for (var j = 0; j < 1e3; j++) {
                y += Math.round(10 + Math.random() * (-10 - 10));
                values.push(
                    [
                        date[j],
                        // Math.random() < 0.1 ? '-' : y
                        y
                    ]
                );
            }

            option.legend.data.push( 'line' + i );
            option.series.push({
                name: 'line' + i,
                type: 'line',
                hoverAnimation: false,
                legendHoverLink: true,
                showSymbol: false,
                data: values,
                emphasis: {
                    focus: 'series'
                }
            });
        }
        return option;
    })(),

    ////////////////////////// Stacked bar //////////////////////////////
    {
        legend: {},
        grid: {
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        series: [
            {
                name: '直接访问',
                type: 'bar',
                stack: '总量',
                label: { show: true },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: '邮件营销',
                type: 'bar',
                stack: '总量',
                label: { show: true },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'bar',
                stack: '总量',
                label: { show: true },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'bar',
                stack: '总量',
                label: { show: true },
                data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
                name: '搜索引擎',
                type: 'bar',
                stack: '总量',
                label: { show: true },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
        ]
    },

    ////////////////////////// Pie //////////////////////////////
    {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 1548, name: '搜索引擎'}
                ]
            }
        ]
    },

    ////////////////////////// Large Pie //////////////////////////////
    (function () {
        var data = genData(50);

        return {
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20
            },
            series: [
                {
                    name: '姓名',
                    type: 'pie',
                    radius: '55%',
                    center: ['40%', '50%'],
                    data: data.seriesData
                }
            ]
        };

        function genData(count) {
            var nameList = [
                '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
            ];
            var legendData = [];
            var seriesData = [];
            var selected = {};
            for (var i = 0; i < count; i++) {
                name = Math.random() > 0.65
                    ? makeWord(4, 1) + '·' + makeWord(3, 0)
                    : makeWord(2, 1);
                legendData.push(name);
                seriesData.push({
                    name: name,
                    value: Math.round(Math.random() * 100000)
                });
                selected[name] = i < 6;
            }

            return {
                legendData: legendData,
                seriesData: seriesData,
                selected: selected
            };

            function makeWord(max, min) {
                var nameLen = Math.ceil(Math.random() * max + min);
                var name = [];
                for (var i = 0; i < nameLen; i++) {
                    name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
                }
                return name.join('');
            }
        }

    })(),


    ////////////////////////// Scatter //////////////////////////////
    {
        grid: {
            containLabel: true
        },
        legend: {
            left: 'center'
        },
        xAxis: [
            {
                type: 'value',
                scale: true,
                axisLabel: {
                    formatter: '{value} cm'
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                axisLabel: {
                    formatter: '{value} kg'
                },
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '女性',
                type: 'scatter',
                data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6], [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2], [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0], [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8], [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8], [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0], [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8], [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6], [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3], [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8], [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3], [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3], [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0], [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7], [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5], [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2], [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8], [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9], [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2], [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4], [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4], [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2], [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0], [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0], [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4], [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4], [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5], [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5], [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2], [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2], [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3], [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5], [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4], [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6], [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8], [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1], [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5], [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2], [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6], [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0], [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0], [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9], [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1], [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4], [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7], [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5], [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8], [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0], [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9], [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6], [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8], [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]]
            },
            {
                name: '男性',
                type: 'scatter',
                data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8], [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6], [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0], [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9], [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8], [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9], [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1], [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1], [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6], [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1], [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2], [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2], [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0], [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2], [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2], [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9], [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9], [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0], [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3], [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7], [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5], [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3], [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1], [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0], [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2], [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1], [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6], [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1], [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5], [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1], [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5], [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5], [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9], [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1], [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8], [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5], [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4], [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5], [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6], [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7], [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5], [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6], [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7], [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0], [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3], [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3], [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9], [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1], [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1], [180.3, 83.2], [180.3, 83.2]]
            }
        ]
    },


    ////////////////////////// Heatmap //////////////////////////////
    (function () {
        /* eslint-disable */
        var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
                '7a', '8a', '9a','10a','11a',
                '12p', '1p', '2p', '3p', '4p', '5p',
                '6p', '7p', '8p', '9p', '10p', '11p'];
        var days = ['Saturday', 'Friday', 'Thursday',
                'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
        var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];

        /* eslint-enable */

        data = data.map(function (item) {
            return [item[1], item[0], item[2] || '-'];
        });

        return {
            grid: {
                height: '50%',
                top: '10%'
            },
            xAxis: {
                type: 'category',
                data: hours,
                splitArea: {
                    show: true
                }
            },
            yAxis: {
                type: 'category',
                data: days,
                splitArea: {
                    show: true
                }
            },
            visualMap: {
                min: 0,
                max: 10,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                bottom: '15%'
            },
            series: [{
                name: 'Punch Card',
                type: 'heatmap',
                data: data,
                label: {
                    show: true
                }
            }]
        };
    })(),


    ////////////////////////// Simple Graph //////////////////////////////
    {
        tooltip: {},
        series: [
            {
                type: 'graph',
                layout: 'none',
                symbolSize: 50,
                label: {
                    show: true
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    fontSize: 20
                },
                data: [{
                    name: '节点1',
                    x: 300,
                    y: 300
                }, {
                    name: '节点2',
                    x: 800,
                    y: 300
                }, {
                    name: '节点3',
                    x: 550,
                    y: 100
                }, {
                    name: '节点4',
                    x: 550,
                    y: 500
                }],
                // links: [],
                links: [{
                    source: 0,
                    target: 1
                }, {
                    source: '节点2',
                    target: '节点1'
                }, {
                    source: '节点1',
                    target: '节点3'
                }, {
                    source: '节点2',
                    target: '节点3'
                }, {
                    source: '节点2',
                    target: '节点4'
                }, {
                    source: '节点1',
                    target: '节点4'
                }],
                lineStyle: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
            }
        ]
    },

    ////////////////////////// Simple Tree //////////////////////////////
    {
        series: [{
            type: 'tree',
            data: [{
                name: 'root',
                children: [{
                    name: 'Child A',
                    children: [{
                        name: 'Leaf C'
                    }, {
                        name: 'Leaf D'
                    }, {
                        name: 'Leaf E'
                    }, {
                        name: 'Leaf F'
                    }]
                }, {
                    name: 'Child B',
                    children: [{
                        name: 'Leaf G'
                    }, {
                        name: 'Leaf H'
                    }]
                }, {
                    name: 'Child D'
                }, {
                    name: 'Child F',
                    children: [{
                        name: 'Leaf J'
                    }, {
                        name: 'Leaf K'
                    }]
                }]
            }],
            label: {
                position: 'right'
            }
        }]
    },

    ////////////////////////// Simple Sunburst //////////////////////////////
    {
        series: [{
            type: 'sunburst',
            label: {
                fontSize: 6,
                color: '#fff'
            },
            emphasis: {
                label: {
                    fontSize: 12
                }
            },
            radius: [20, '80%'],
            data: [{
                name: 'Food',
                children: [{
                    value: 3,
                    name: 'Fruit',
                    children: [{
                        value: 1,
                        name: 'Apple'
                    }, {
                        value: 2,
                        name: 'Orange',
                        children: [{
                            name: 'Seville Orange',
                            value: 1
                        }, {
                            name: 'Blood Orange',
                            value: 1
                        }]
                    }]
                }, {
                    value: 9,
                    name: 'Meat',
                    children: [{
                        value: 6,
                        name: 'Beaf',
                        children: [{
                            name: 'Sirloin',
                            value: 1
                        }, {
                            name: 'Rib',
                            value: 1
                        }, {
                            name: 'Chuck',
                            value: 1
                        }, {
                            name: 'Shank',
                            value: 1
                        }]
                    }, {
                        value: 2,
                        name: 'Chicken',
                        children: [{
                            name: 'Wings',
                            value: 1
                        }]
                    }, {
                        name: 'Breast',
                        value: 1
                    }]
                }]
            }, {
                value: 6,
                name: 'Drinks',
                children: [{
                    value: 3,
                    name: 'Wine',
                    children: [{
                        name: 'USA',
                        value: 2
                    }, {
                        name: 'Europe',
                        children: [{
                            name: 'Germany',
                            value: 1
                        }]
                    }]
                }, {
                    name: 'Soft Drink',
                    children: [{
                        value: 3,
                        name: 'Juice',
                        children: [{
                            name: 'Apple Juice',
                            value: 1
                        }, {
                            name: 'Orange Juice',
                            value: 2
                        }]
                    }]
                }]
            }, {
                value: 6,
                name: 'Fashion',
                children: [{
                    name: 'Clothing',
                    children: [{
                        name: 'Shirts',
                        value: 1
                    }, {
                        name: 'Jackets',
                        value: 3,
                        children: [{
                            name: 'Men',
                            value: 1
                        }, {
                            name: 'Woman',
                            value: 1
                        }]
                    }, {
                        value: 2,
                        name: 'Coats',
                        children: [{
                            name: 'Men',
                            value: 1
                        }, {
                            name: 'Woman',
                            value: 1
                        }]
                    }]
                }]
            }, {
                name: 'Computers',
                children: [{
                    name: 'Components',
                    value: 4,
                    children: [{
                        name: 'Barebones',
                        value: 1
                    }, {
                        value: 2,
                        name: 'External',
                        children: [{
                            name: 'Hard Drives',
                            value: 2
                        }]
                    }, {
                        name: 'Monitors',
                        value: 1
                    }]
                }, {
                    value: 3,
                    name: 'Other',
                    children: [{
                        name: 'USB',
                        value: 1,
                    }, {
                        name: 'Cases'
                    }, {
                        name: 'Sound Cards',
                        value: 1
                    }]
                }]
            }]
        }]
    },


    ////////////////////////// Simple Treemap //////////////////////////////
    {
        series: [{
            type: 'treemap',
            roam: false,
            data: [{
                name: 'Food',
                children: [{
                    value: 3,
                    name: 'Fruit',
                    children: [{
                        value: 1,
                        name: 'Apple'
                    }, {
                        value: 2,
                        name: 'Orange',
                        children: [{
                            name: 'Seville Orange',
                            value: 1
                        }, {
                            name: 'Blood Orange',
                            value: 1
                        }]
                    }]
                }, {
                    value: 8,
                    name: 'Meat',
                    children: [{
                        value: 6,
                        name: 'Beaf',
                        children: [{
                            name: 'Sirloin',
                            value: 1
                        }, {
                            name: 'Rib',
                            value: 1
                        }, {
                            name: 'Chuck',
                            value: 1
                        }, {
                            name: 'Shank',
                            value: 1
                        }]
                    }, {
                        value: 2,
                        name: 'Chicken',
                        children: [{
                            name: 'Wings',
                            value: 1
                        }]
                    }, {
                        name: 'Breast',
                        value: 1
                    }]
                }]
            }, {
                value: 6,
                name: 'Drinks',
                children: [{
                    value: 3,
                    name: 'Wine',
                    children: [{
                        name: 'USA',
                        value: 2
                    }, {
                        name: 'Europe',
                        children: [{
                            name: 'Germany',
                            value: 1
                        }]
                    }]
                }, {
                    name: 'Soft Drink',
                    children: [{
                        value: 3,
                        name: 'Juice',
                        children: [{
                            name: 'Apple Juice',
                            value: 1
                        }, {
                            name: 'Orange Juice',
                            value: 2
                        }]
                    }]
                }]
            }, {
                value: 6,
                name: 'Fashion',
                children: [{
                    name: 'Clothing',
                    children: [{
                        name: 'Shirts',
                        value: 1
                    }, {
                        name: 'Jackets',
                        value: 3,
                        children: [{
                            name: 'Men',
                            value: 1
                        }, {
                            name: 'Woman',
                            value: 1
                        }]
                    }, {
                        value: 2,
                        name: 'Coats',
                        children: [{
                            name: 'Men',
                            value: 1
                        }, {
                            name: 'Woman',
                            value: 1
                        }]
                    }]
                }]
            }, {
                name: 'Computers',
                children: [{
                    name: 'Components',
                    value: 4,
                    children: [{
                        name: 'Barebones',
                        value: 1
                    }, {
                        value: 2,
                        name: 'External',
                        children: [{
                            name: 'Hard Drives',
                            value: 2
                        }]
                    }, {
                        name: 'Monitors',
                        value: 1
                    }]
                }, {
                    value: 3,
                    name: 'Other',
                    children: [{
                        name: 'USB',
                        value: 1,
                    }, {
                        name: 'Cases'
                    }, {
                        name: 'Sound Cards',
                        value: 1
                    }]
                }]
            }]
        }]
    },


    ////////////////////////// Funnel //////////////////////////////
    {
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['展现', '点击', '访问', '咨询', '订单']
        },
        series: [
            {
                name: '漏斗图',
                type: 'funnel',
                width: '40%',
                height: '45%',
                left: '5%',
                top: '50%',
                data: [
                    {value: 60, name: '访问'},
                    {value: 30, name: '咨询'},
                    {value: 10, name: '订单'},
                    {value: 80, name: '点击'},
                    {value: 100, name: '展现'}
                ]
            },
            {
                name: '金字塔',
                type: 'funnel',
                width: '40%',
                height: '45%',
                left: '5%',
                top: '5%',
                sort: 'ascending',
                data: [
                    {value: 60, name: '访问'},
                    {value: 30, name: '咨询'},
                    {value: 10, name: '订单'},
                    {value: 80, name: '点击'},
                    {value: 100, name: '展现'}
                ]
            },
            {
                name: '漏斗图',
                type: 'funnel',
                width: '40%',
                height: '45%',
                left: '55%',
                top: '5%',
                label: {
                    position: 'left'
                },
                data: [
                    {value: 60, name: '访问'},
                    {value: 30, name: '咨询'},
                    {value: 10, name: '订单'},
                    {value: 80, name: '点击'},
                    {value: 100, name: '展现'}
                ]
            },
            {
                name: '金字塔',
                type: 'funnel',
                width: '40%',
                height: '45%',
                left: '55%',
                top: '50%',
                sort: 'ascending',
                label: {
                    position: 'left'
                },
                data: [
                    {value: 60, name: '访问'},
                    {value: 30, name: '咨询'},
                    {value: 10, name: '订单'},
                    {value: 80, name: '点击'},
                    {value: 100, name: '展现'}
                ]
            }
        ]
    },

    ////////////////////////// ThemeRiver //////////////////////////////
    {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: 'rgba(0,0,0,0.2)',
                    width: 1,
                    type: 'solid'
                }
            }
        },

        legend: {
            data: ['DQ', 'TY', 'SS', 'QG', 'SY', 'DD']
        },

        singleAxis: {
            top: 50,
            bottom: 50,
            axisTick: {},
            axisLabel: {},
            type: 'time',
            axisPointer: {
                animation: true,
                label: {
                    show: true
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    opacity: 0.2
                }
            }
        },

        series: [
            {
                type: 'themeRiver',
                /* eslint-disable */
                data: [['2015/11/08',10,'DQ'],['2015/11/09',15,'DQ'],['2015/11/10',35,'DQ'],
                ['2015/11/11',38,'DQ'],['2015/11/12',22,'DQ'],['2015/11/13',16,'DQ'],
                ['2015/11/14',7,'DQ'],['2015/11/15',2,'DQ'],['2015/11/16',17,'DQ'],
                ['2015/11/17',33,'DQ'],['2015/11/18',40,'DQ'],['2015/11/19',32,'DQ'],
                ['2015/11/20',26,'DQ'],['2015/11/21',35,'DQ'],['2015/11/22',40,'DQ'],
                ['2015/11/23',32,'DQ'],['2015/11/24',26,'DQ'],['2015/11/25',22,'DQ'],
                ['2015/11/26',16,'DQ'],['2015/11/27',22,'DQ'],['2015/11/28',10,'DQ'],
                ['2015/11/08',35,'TY'],['2015/11/09',36,'TY'],['2015/11/10',37,'TY'],
                ['2015/11/11',22,'TY'],['2015/11/12',24,'TY'],['2015/11/13',26,'TY'],
                ['2015/11/14',34,'TY'],['2015/11/15',21,'TY'],['2015/11/16',18,'TY'],
                ['2015/11/17',45,'TY'],['2015/11/18',32,'TY'],['2015/11/19',35,'TY'],
                ['2015/11/20',30,'TY'],['2015/11/21',28,'TY'],['2015/11/22',27,'TY'],
                ['2015/11/23',26,'TY'],['2015/11/24',15,'TY'],['2015/11/25',30,'TY'],
                ['2015/11/26',35,'TY'],['2015/11/27',42,'TY'],['2015/11/28',42,'TY'],
                ['2015/11/08',21,'SS'],['2015/11/09',25,'SS'],['2015/11/10',27,'SS'],
                ['2015/11/11',23,'SS'],['2015/11/12',24,'SS'],['2015/11/13',21,'SS'],
                ['2015/11/14',35,'SS'],['2015/11/15',39,'SS'],['2015/11/16',40,'SS'],
                ['2015/11/17',36,'SS'],['2015/11/18',33,'SS'],['2015/11/19',43,'SS'],
                ['2015/11/20',40,'SS'],['2015/11/21',34,'SS'],['2015/11/22',28,'SS'],
                ['2015/11/23',26,'SS'],['2015/11/24',37,'SS'],['2015/11/25',41,'SS'],
                ['2015/11/26',46,'SS'],['2015/11/27',47,'SS'],['2015/11/28',41,'SS'],
                ['2015/11/08',10,'QG'],['2015/11/09',15,'QG'],['2015/11/10',35,'QG'],
                ['2015/11/11',38,'QG'],['2015/11/12',22,'QG'],['2015/11/13',16,'QG'],
                ['2015/11/14',7,'QG'],['2015/11/15',2,'QG'],['2015/11/16',17,'QG'],
                ['2015/11/17',33,'QG'],['2015/11/18',40,'QG'],['2015/11/19',32,'QG'],
                ['2015/11/20',26,'QG'],['2015/11/21',35,'QG'],['2015/11/22',40,'QG'],
                ['2015/11/23',32,'QG'],['2015/11/24',26,'QG'],['2015/11/25',22,'QG'],
                ['2015/11/26',16,'QG'],['2015/11/27',22,'QG'],['2015/11/28',10,'QG'],
                ['2015/11/08',10,'SY'],['2015/11/09',15,'SY'],['2015/11/10',35,'SY'],
                ['2015/11/11',38,'SY'],['2015/11/12',22,'SY'],['2015/11/13',16,'SY'],
                ['2015/11/14',7,'SY'],['2015/11/15',2,'SY'],['2015/11/16',17,'SY'],
                ['2015/11/17',33,'SY'],['2015/11/18',40,'SY'],['2015/11/19',32,'SY'],
                ['2015/11/20',26,'SY'],['2015/11/21',35,'SY'],['2015/11/22',4,'SY'],
                ['2015/11/23',32,'SY'],['2015/11/24',26,'SY'],['2015/11/25',22,'SY'],
                ['2015/11/26',16,'SY'],['2015/11/27',22,'SY'],['2015/11/28',10,'SY'],
                ['2015/11/08',10,'DD'],['2015/11/09',15,'DD'],['2015/11/10',35,'DD'],
                ['2015/11/11',38,'DD'],['2015/11/12',22,'DD'],['2015/11/13',16,'DD'],
                ['2015/11/14',7,'DD'],['2015/11/15',2,'DD'],['2015/11/16',17,'DD'],
                ['2015/11/17',33,'DD'],['2015/11/18',4,'DD'],['2015/11/19',32,'DD'],
                ['2015/11/20',26,'DD'],['2015/11/21',35,'DD'],['2015/11/22',40,'DD'],
                ['2015/11/23',32,'DD'],['2015/11/24',26,'DD'],['2015/11/25',22,'DD'],
                ['2015/11/26',16,'DD'],['2015/11/27',22,'DD'],['2015/11/28',10,'DD']]
            }
        ]
    },

    ////////////////////////// Pictorial Bar //////////////////////////////
    (function () {
        var pathSymbols = {
            reindeer: 'path://M-22.788,24.521c2.08-0.986,3.611-3.905,4.984-5.892 c-2.686,2.782-5.047,5.884-9.102,7.312c-0.992,0.005-0.25-2.016,0.34-2.362l1.852-0.41c0.564-0.218,0.785-0.842,0.902-1.347 c2.133-0.727,4.91-4.129,6.031-6.194c1.748-0.7,4.443-0.679,5.734-2.293c1.176-1.468,0.393-3.992,1.215-6.557 c0.24-0.754,0.574-1.581,1.008-2.293c-0.611,0.011-1.348-0.061-1.959-0.608c-1.391-1.245-0.785-2.086-1.297-3.313 c1.684,0.744,2.5,2.584,4.426,2.586C-8.46,3.012-8.255,2.901-8.04,2.824c6.031-1.952,15.182-0.165,19.498-3.937 c1.15-3.933-1.24-9.846-1.229-9.938c0.008-0.062-1.314-0.004-1.803-0.258c-1.119-0.771-6.531-3.75-0.17-3.33 c0.314-0.045,0.943,0.259,1.439,0.435c-0.289-1.694-0.92-0.144-3.311-1.946c0,0-1.1-0.855-1.764-1.98 c-0.836-1.09-2.01-2.825-2.992-4.031c-1.523-2.476,1.367,0.709,1.816,1.108c1.768,1.704,1.844,3.281,3.232,3.983 c0.195,0.203,1.453,0.164,0.926-0.468c-0.525-0.632-1.367-1.278-1.775-2.341c-0.293-0.703-1.311-2.326-1.566-2.711 c-0.256-0.384-0.959-1.718-1.67-2.351c-1.047-1.187-0.268-0.902,0.521-0.07c0.789,0.834,1.537,1.821,1.672,2.023 c0.135,0.203,1.584,2.521,1.725,2.387c0.102-0.259-0.035-0.428-0.158-0.852c-0.125-0.423-0.912-2.032-0.961-2.083 c-0.357-0.852-0.566-1.908-0.598-3.333c0.4-2.375,0.648-2.486,0.549-0.705c0.014,1.143,0.031,2.215,0.602,3.247 c0.807,1.496,1.764,4.064,1.836,4.474c0.561,3.176,2.904,1.749,2.281-0.126c-0.068-0.446-0.109-2.014-0.287-2.862 c-0.18-0.849-0.219-1.688-0.113-3.056c0.066-1.389,0.232-2.055,0.277-2.299c0.285-1.023,0.4-1.088,0.408,0.135 c-0.059,0.399-0.131,1.687-0.125,2.655c0.064,0.642-0.043,1.768,0.172,2.486c0.654,1.928-0.027,3.496,1,3.514 c1.805-0.424,2.428-1.218,2.428-2.346c-0.086-0.704-0.121-0.843-0.031-1.193c0.221-0.568,0.359-0.67,0.312-0.076 c-0.055,0.287,0.031,0.533,0.082,0.794c0.264,1.197,0.912,0.114,1.283-0.782c0.15-0.238,0.539-2.154,0.545-2.522 c-0.023-0.617,0.285-0.645,0.309,0.01c0.064,0.422-0.248,2.646-0.205,2.334c-0.338,1.24-1.105,3.402-3.379,4.712 c-0.389,0.12-1.186,1.286-3.328,2.178c0,0,1.729,0.321,3.156,0.246c1.102-0.19,3.707-0.027,4.654,0.269 c1.752,0.494,1.531-0.053,4.084,0.164c2.26-0.4,2.154,2.391-1.496,3.68c-2.549,1.405-3.107,1.475-2.293,2.984 c3.484,7.906,2.865,13.183,2.193,16.466c2.41,0.271,5.732-0.62,7.301,0.725c0.506,0.333,0.648,1.866-0.457,2.86 c-4.105,2.745-9.283,7.022-13.904,7.662c-0.977-0.194,0.156-2.025,0.803-2.247l1.898-0.03c0.596-0.101,0.936-0.669,1.152-1.139 c3.16-0.404,5.045-3.775,8.246-4.818c-4.035-0.718-9.588,3.981-12.162,1.051c-5.043,1.423-11.449,1.84-15.895,1.111 c-3.105,2.687-7.934,4.021-12.115,5.866c-3.271,3.511-5.188,8.086-9.967,10.414c-0.986,0.119-0.48-1.974,0.066-2.385l1.795-0.618 C-22.995,25.682-22.849,25.035-22.788,24.521z',
            plane: 'path://M1.112,32.559l2.998,1.205l-2.882,2.268l-2.215-0.012L1.112,32.559z M37.803,23.96 c0.158-0.838,0.5-1.509,0.961-1.904c-0.096-0.037-0.205-0.071-0.344-0.071c-0.777-0.005-2.068-0.009-3.047-0.009 c-0.633,0-1.217,0.066-1.754,0.18l2.199,1.804H37.803z M39.738,23.036c-0.111,0-0.377,0.325-0.537,0.924h1.076 C40.115,23.361,39.854,23.036,39.738,23.036z M39.934,39.867c-0.166,0-0.674,0.705-0.674,1.986s0.506,1.986,0.674,1.986 s0.672-0.705,0.672-1.986S40.102,39.867,39.934,39.867z M38.963,38.889c-0.098-0.038-0.209-0.07-0.348-0.073 c-0.082,0-0.174,0-0.268-0.001l-7.127,4.671c0.879,0.821,2.42,1.417,4.348,1.417c0.979,0,2.27-0.006,3.047-0.01 c0.139,0,0.25-0.034,0.348-0.072c-0.646-0.555-1.07-1.643-1.07-2.967C37.891,40.529,38.316,39.441,38.963,38.889z M32.713,23.96 l-12.37-10.116l-4.693-0.004c0,0,4,8.222,4.827,10.121H32.713z M59.311,32.374c-0.248,2.104-5.305,3.172-8.018,3.172H39.629 l-25.325,16.61L9.607,52.16c0,0,6.687-8.479,7.95-10.207c1.17-1.6,3.019-3.699,3.027-6.407h-2.138 c-5.839,0-13.816-3.789-18.472-5.583c-2.818-1.085-2.396-4.04-0.031-4.04h0.039l-3.299-11.371h3.617c0,0,4.352,5.696,5.846,7.5 c2,2.416,4.503,3.678,8.228,3.87h30.727c2.17,0,4.311,0.417,6.252,1.046c3.49,1.175,5.863,2.7,7.199,4.027 C59.145,31.584,59.352,32.025,59.311,32.374z M22.069,30.408c0-0.815-0.661-1.475-1.469-1.475c-0.812,0-1.471,0.66-1.471,1.475 s0.658,1.475,1.471,1.475C21.408,31.883,22.069,31.224,22.069,30.408z M27.06,30.408c0-0.815-0.656-1.478-1.466-1.478 c-0.812,0-1.471,0.662-1.471,1.478s0.658,1.477,1.471,1.477C26.404,31.885,27.06,31.224,27.06,30.408z M32.055,30.408 c0-0.815-0.66-1.475-1.469-1.475c-0.808,0-1.466,0.66-1.466,1.475s0.658,1.475,1.466,1.475 C31.398,31.883,32.055,31.224,32.055,30.408z M37.049,30.408c0-0.815-0.658-1.478-1.467-1.478c-0.812,0-1.469,0.662-1.469,1.478 s0.656,1.477,1.469,1.477C36.389,31.885,37.049,31.224,37.049,30.408z M42.039,30.408c0-0.815-0.656-1.478-1.465-1.478 c-0.811,0-1.469,0.662-1.469,1.478s0.658,1.477,1.469,1.477C41.383,31.885,42.039,31.224,42.039,30.408z M55.479,30.565 c-0.701-0.436-1.568-0.896-2.627-1.347c-0.613,0.289-1.551,0.476-2.73,0.476c-1.527,0-1.639,2.263,0.164,2.316 C52.389,32.074,54.627,31.373,55.479,30.565z',
            train: 'path://M67.335,33.596L67.335,33.596c-0.002-1.39-1.153-3.183-3.328-4.218h-9.096v-2.07h5.371 c-4.939-2.07-11.199-4.141-14.89-4.141H19.72v12.421v5.176h38.373c4.033,0,8.457-1.035,9.142-5.176h-0.027 c0.076-0.367,0.129-0.751,0.129-1.165L67.335,33.596L67.335,33.596z M27.999,30.413h-3.105v-4.141h3.105V30.413z M35.245,30.413 h-3.104v-4.141h3.104V30.413z M42.491,30.413h-3.104v-4.141h3.104V30.413z M49.736,30.413h-3.104v-4.141h3.104V30.413z  M14.544,40.764c1.143,0,2.07-0.927,2.07-2.07V35.59V25.237c0-1.145-0.928-2.07-2.07-2.07H-9.265c-1.143,0-2.068,0.926-2.068,2.07 v10.351v3.105c0,1.144,0.926,2.07,2.068,2.07H14.544L14.544,40.764z M8.333,26.272h3.105v4.141H8.333V26.272z M1.087,26.272h3.105 v4.141H1.087V26.272z M-6.159,26.272h3.105v4.141h-3.105V26.272z M-9.265,41.798h69.352v1.035H-9.265V41.798z',
            ship: 'path://M16.678,17.086h9.854l-2.703,5.912c5.596,2.428,11.155,5.575,16.711,8.607c3.387,1.847,6.967,3.75,10.541,5.375 v-6.16l-4.197-2.763v-5.318L33.064,12.197h-11.48L20.43,15.24h-4.533l-1.266,3.286l0.781,0.345L16.678,17.086z M49.6,31.84 l0.047,1.273L27.438,20.998l0.799-1.734L49.6,31.84z M33.031,15.1l12.889,8.82l0.027,0.769L32.551,16.1L33.031,15.1z M22.377,14.045 h9.846l-1.539,3.365l-2.287-1.498h1.371l0.721-1.352h-2.023l-0.553,1.037l-0.541-0.357h-0.34l0.359-0.684h-2.025l-0.361,0.684 h-3.473L22.377,14.045z M23.695,20.678l-0.004,0.004h0.004V20.678z M24.828,18.199h-2.031l-0.719,1.358h2.029L24.828,18.199z  M40.385,34.227c-12.85-7.009-25.729-14.667-38.971-12.527c1.26,8.809,9.08,16.201,8.213,24.328 c-0.553,4.062-3.111,0.828-3.303,7.137c15.799,0,32.379,0,48.166,0l0.066-4.195l1.477-7.23 C50.842,39.812,45.393,36.961,40.385,34.227z M13.99,35.954c-1.213,0-2.195-1.353-2.195-3.035c0-1.665,0.98-3.017,2.195-3.017 c1.219,0,2.195,1.352,2.195,3.017C16.186,34.604,15.213,35.954,13.99,35.954z M23.691,20.682h-2.02l-0.588,1.351h2.023 L23.691,20.682z M19.697,18.199l-0.721,1.358h2.025l0.727-1.358H19.697z',
            car: 'path://M49.592,40.883c-0.053,0.354-0.139,0.697-0.268,0.963c-0.232,0.475-0.455,0.519-1.334,0.475 c-1.135-0.053-2.764,0-4.484,0.068c0,0.476,0.018,0.697,0.018,0.697c0.111,1.299,0.697,1.342,0.931,1.342h3.7 c0.326,0,0.628,0,0.861-0.154c0.301-0.196,0.43-0.772,0.543-1.78c0.017-0.146,0.025-0.336,0.033-0.56v-0.01 c0-0.068,0.008-0.154,0.008-0.25V41.58l0,0C49.6,41.348,49.6,41.09,49.592,40.883L49.592,40.883z M6.057,40.883 c0.053,0.354,0.137,0.697,0.268,0.963c0.23,0.475,0.455,0.519,1.334,0.475c1.137-0.053,2.762,0,4.484,0.068 c0,0.476-0.018,0.697-0.018,0.697c-0.111,1.299-0.697,1.342-0.93,1.342h-3.7c-0.328,0-0.602,0-0.861-0.154 c-0.309-0.18-0.43-0.772-0.541-1.78c-0.018-0.146-0.027-0.336-0.035-0.56v-0.01c0-0.068-0.008-0.154-0.008-0.25V41.58l0,0 C6.057,41.348,6.057,41.09,6.057,40.883L6.057,40.883z M49.867,32.766c0-2.642-0.344-5.224-0.482-5.507 c-0.104-0.207-0.766-0.749-2.271-1.773c-1.522-1.042-1.487-0.887-1.766-1.566c0.25-0.078,0.492-0.224,0.639-0.241 c0.326-0.034,0.345,0.274,1.023,0.274c0.68,0,2.152-0.18,2.453-0.48c0.301-0.303,0.396-0.405,0.396-0.672 c0-0.268-0.156-0.818-0.447-1.146c-0.293-0.327-1.541-0.49-2.273-0.585c-0.729-0.095-0.834,0-1.022,0.121 c-0.304,0.189-0.32,1.919-0.32,1.919l-0.713,0.018c-0.465-1.146-1.11-3.452-2.117-5.269c-1.103-1.979-2.256-2.599-2.737-2.754 c-0.474-0.146-0.904-0.249-4.131-0.576c-3.298-0.344-5.922-0.388-8.262-0.388c-2.342,0-4.967,0.052-8.264,0.388 c-3.229,0.336-3.66,0.43-4.133,0.576s-1.633,0.775-2.736,2.754c-1.006,1.816-1.652,4.123-2.117,5.269L9.87,23.109 c0,0-0.008-1.729-0.318-1.919c-0.189-0.121-0.293-0.225-1.023-0.121c-0.732,0.104-1.98,0.258-2.273,0.585 c-0.293,0.327-0.447,0.878-0.447,1.146c0,0.267,0.094,0.379,0.396,0.672c0.301,0.301,1.773,0.48,2.453,0.48 c0.68,0,0.697-0.309,1.023-0.274c0.146,0.018,0.396,0.163,0.637,0.241c-0.283,0.68-0.24,0.524-1.764,1.566 c-1.506,1.033-2.178,1.566-2.271,1.773c-0.139,0.283-0.482,2.865-0.482,5.508s0.189,5.02,0.189,5.86c0,0.354,0,0.976,0.076,1.565 c0.053,0.354,0.129,0.697,0.268,0.966c0.232,0.473,0.447,0.516,1.334,0.473c1.137-0.051,2.779,0,4.477,0.07 c1.135,0.043,2.297,0.086,3.33,0.11c2.582,0.051,1.826-0.379,2.928-0.36c1.102,0.016,5.447,0.196,9.424,0.196 c3.976,0,8.332-0.182,9.423-0.196c1.102-0.019,0.346,0.411,2.926,0.36c1.033-0.018,2.195-0.067,3.332-0.11 c1.695-0.062,3.348-0.121,4.477-0.07c0.886,0.043,1.103,0,1.332-0.473c0.132-0.269,0.218-0.611,0.269-0.966 c0.086-0.592,0.078-1.213,0.078-1.565C49.678,37.793,49.867,35.408,49.867,32.766L49.867,32.766z M13.219,19.735 c0.412-0.964,1.652-2.9,2.256-3.244c0.145-0.087,1.426-0.491,4.637-0.706c2.953-0.198,6.217-0.276,7.73-0.276 c1.513,0,4.777,0.078,7.729,0.276c3.201,0.215,4.502,0.611,4.639,0.706c0.775,0.533,1.842,2.28,2.256,3.244 c0.412,0.965,0.965,2.858,0.861,3.116c-0.104,0.258,0.104,0.388-1.291,0.275c-1.387-0.103-10.088-0.216-14.185-0.216 c-4.088,0-12.789,0.113-14.184,0.216c-1.395,0.104-1.188-0.018-1.291-0.275C12.254,22.593,12.805,20.708,13.219,19.735 L13.219,19.735z M16.385,30.511c-0.619,0.155-0.988,0.491-1.764,0.482c-0.775,0-2.867-0.353-3.314-0.371 c-0.447-0.017-0.842,0.302-1.076,0.362c-0.23,0.06-0.688-0.104-1.377-0.318c-0.688-0.216-1.092-0.155-1.316-1.094 c-0.232-0.93,0-2.264,0-2.264c1.488-0.068,2.928,0.069,5.621,0.826c2.693,0.758,4.191,2.213,4.191,2.213 S17.004,30.357,16.385,30.511L16.385,30.511z M36.629,37.293c-1.23,0.164-6.386,0.207-8.794,0.207c-2.412,0-7.566-0.051-8.799-0.207 c-1.256-0.164-2.891-1.67-1.764-2.865c1.523-1.627,1.24-1.576,4.701-2.023C24.967,32.018,27.239,32,27.834,32 c0.584,0,2.865,0.025,5.859,0.404c3.461,0.447,3.178,0.396,4.699,2.022C39.521,35.623,37.887,37.129,36.629,37.293L36.629,37.293z  M48.129,29.582c-0.232,0.93-0.629,0.878-1.318,1.093c-0.688,0.216-1.145,0.371-1.377,0.319c-0.231-0.053-0.627-0.371-1.074-0.361 c-0.448,0.018-2.539,0.37-3.313,0.37c-0.772,0-1.146-0.328-1.764-0.481c-0.621-0.154-0.966-0.154-0.966-0.154 s1.49-1.464,4.191-2.213c2.693-0.758,4.131-0.895,5.621-0.826C48.129,27.309,48.361,28.643,48.129,29.582L48.129,29.582z'
        };

        var labelSetting = {
            normal: {
                show: true,
                position: 'right',
                offset: [10, 0],
                textStyle: {
                    fontSize: 16
                }
            }
        };
        return {
            legend: {
                data: ['2015', '2016']
            },
            grid: {
                containLabel: true,
                left: 20
            },
            yAxis: {
                data: ['reindeer', 'ship', 'plane', 'train', 'car'],
                inverse: true,
                axisLine: {show: false},
                axisTick: {show: false},
                axisLabel: {
                    margin: 30,
                    fontSize: 14
                },
                axisPointer: {
                    label: {
                        show: true,
                        margin: 30
                    }
                }
            },
            xAxis: {
                splitLine: {show: false},
                axisLabel: {show: false},
                axisTick: {show: false},
                axisLine: {show: false}
            },
            series: [{
                name: '2015',
                type: 'pictorialBar',
                label: labelSetting,
                symbolRepeat: true,
                symbolSize: ['80%', '60%'],
                barCategoryGap: '40%',
                data: [{
                    value: 157,
                    symbol: pathSymbols.reindeer
                }, {
                    value: 21,
                    symbol: pathSymbols.ship
                }, {
                    value: 66,
                    symbol: pathSymbols.plane
                }, {
                    value: 78,
                    symbol: pathSymbols.train
                }, {
                    value: 123,
                    symbol: pathSymbols.car
                }]
            }, {
                name: '2016',
                type: 'pictorialBar',
                barGap: '10%',
                label: labelSetting,
                symbolRepeat: true,
                symbolSize: ['80%', '60%'],
                data: [{
                    value: 184,
                    symbol: pathSymbols.reindeer
                }, {
                    value: 29,
                    symbol: pathSymbols.ship
                }, {
                    value: 73,
                    symbol: pathSymbols.plane
                }, {
                    value: 91,
                    symbol: pathSymbols.train
                }, {
                    value: 95,
                    symbol: pathSymbols.car
                }]
            }]
        };
    })(),


    ////////////////////////// Custom series //////////////////////////////
    (function () {
        var rawData=[{wall_time:new Date("2016-06-24T04:13:11.455Z"),step:28,bins:[{x:.0537,dx:.0054,y:0},{x:.0591,dx:.0054,y:0},{x:.0645,dx:.0054,y:0},{x:.0698,dx:.0054,y:0},{x:.0752,dx:.0054,y:3.2512},{x:.0805,dx:.0054,y:19.1043},{x:.0859,dx:.0054,y:66.4758},{x:.0913,dx:.0054,y:89.9105},{x:.0966,dx:.0054,y:102.4476},{x:.102,dx:.0054,y:83.8924},{x:.1073,dx:.0054,y:81.9883},{x:.1127,dx:.0054,y:25.21},{x:.1181,dx:.0054,y:25.21},{x:.1234,dx:.0054,y:2.51},{x:.1288,dx:.0054,y:0},{x:.1341,dx:.0054,y:0},{x:.1395,dx:.0054,y:0},{x:.1449,dx:.0054,y:0},{x:.1502,dx:.0054,y:0},{x:.1556,dx:.0054,y:0}]},{wall_time:new Date("2016-06-24T04:13:32.817Z"),step:74,bins:[{x:.0537,dx:.0054,y:0},{x:.0591,dx:.0054,y:0},{x:.0645,dx:.0054,y:0},{x:.0698,dx:.0054,y:.7448},{x:.0752,dx:.0054,y:14.6532},{x:.0805,dx:.0054,y:30.3488},{x:.0859,dx:.0054,y:59.5117},{x:.0913,dx:.0054,y:75.1098},{x:.0966,dx:.0054,y:83.4545},{x:.102,dx:.0054,y:74.1291},{x:.1073,dx:.0054,y:73.1618},{x:.1127,dx:.0054,y:40.9067},{x:.1181,dx:.0054,y:40.9067},{x:.1234,dx:.0054,y:5.241},{x:.1288,dx:.0054,y:1.2973},{x:.1341,dx:.0054,y:.5347},{x:.1395,dx:.0054,y:0},{x:.1449,dx:.0054,y:0},{x:.1502,dx:.0054,y:0},{x:.1556,dx:.0054,y:0}]},{wall_time:new Date("2016-06-24T04:14:04.265Z"),step:148,bins:[{x:.0537,dx:.0054,y:0},{x:.0591,dx:.0054,y:0},{x:.0645,dx:.0054,y:0},{x:.0698,dx:.0054,y:1.4897},{x:.0752,dx:.0054,y:19.5529},{x:.0805,dx:.0054,y:36.5817},{x:.0859,dx:.0054,y:63.3103},{x:.0913,dx:.0054,y:68.1847},{x:.0966,dx:.0054,y:70.7925},{x:.102,dx:.0054,y:68.2578},{x:.1073,dx:.0054,y:67.9546},{x:.1127,dx:.0054,y:44.712},{x:.1181,dx:.0054,y:44.712},{x:.1234,dx:.0054,y:8.3454},{x:.1288,dx:.0054,y:4.3242},{x:.1341,dx:.0054,y:1.7822},{x:.1395,dx:.0054,y:0},{x:.1449,dx:.0054,y:0},{x:.1502,dx:.0054,y:0},{x:.1556,dx:.0054,y:0}]},{wall_time:new Date("2016-06-24T04:14:17.166Z"),step:172,bins:[{x:.0537,dx:.0054,y:0},{x:.0591,dx:.0054,y:0},{x:.0645,dx:.0054,y:0},{x:.0698,dx:.0054,y:2.2345},{x:.0752,dx:.0054,y:22.1303},{x:.0805,dx:.0054,y:37.9432},{x:.0859,dx:.0054,y:57.6124},{x:.0913,dx:.0054,y:63.9491},{x:.0966,dx:.0054,y:67.3392},{x:.102,dx:.0054,y:70.352},{x:.1073,dx:.0054,y:70.5635},{x:.1127,dx:.0054,y:44.712},{x:.1181,dx:.0054,y:44.712},{x:.1234,dx:.0054,y:9.5135},{x:.1288,dx:.0054,y:5.6214},{x:.1341,dx:.0054,y:2.5479},{x:.1395,dx:.0054,y:.3931},{x:.1449,dx:.0054,y:.3758},{x:.1502,dx:.0054,y:0},{x:.1556,dx:.0054,y:0}]},{wall_time:new Date("2016-06-24T04:14:30.696Z"),step:202,bins:[{x:.0537,dx:.0054,y:0},{x:.0591,dx:.0054,y:0},{x:.0645,dx:.0054,y:0},{x:.0698,dx:.0054,y:5.2139},{x:.0752,dx:.0054,y:22.6865},{x:.0805,dx:.0054,y:37.4077},{x:.0859,dx:.0054,y:57.6124},{x:.0913,dx:.0054,y:62.0743},{x:.0966,dx:.0054,y:64.4614},{x:.102,dx:.0054,y:69.1481},{x:.1073,dx:.0054,y:69.5186},{x:.1127,dx:.0054,y:44.2364},{x:.1181,dx:.0054,y:44.2364},{x:.1234,dx:.0054,y:11.4129},{x:.1288,dx:.0054,y:7.7835},{x:.1341,dx:.0054,y:3.439},{x:.1395,dx:.0054,y:.3931},{x:.1449,dx:.0054,y:.3758},{x:.1502,dx:.0054,y:0},{x:.1556,dx:.0054,y:0}]},{wall_time:new Date("2016-06-24T04:14:39.713Z"),step:224,bins:[{x:.0537,dx:.0054,y:0},{x:.0591,dx:.0054,y:0},{x:.0645,dx:.0054,y:0},{x:.0698,dx:.0054,y:5.9588},{x:.0752,dx:.0054,y:21.5483},{x:.0805,dx:.0054,y:37.556},{x:.0859,dx:.0054,y:65.2096},{x:.0913,dx:.0054,y:61.7226},{x:.0966,dx:.0054,y:59.857},{x:.102,dx:.0054,y:65.4045},{x:.1073,dx:.0054,y:65.8728},{x:.1127,dx:.0054,y:46.6147},{x:.1181,dx:.0054,y:46.6147},{x:.1234,dx:.0054,y:12.0391},{x:.1288,dx:.0054,y:8.2159},{x:.1341,dx:.0054,y:3.3861},{x:.1395,dx:.0054,y:0},{x:.1449,dx:.0054,y:0},{x:.1502,dx:.0054,y:0},{x:.1556,dx:.0054,y:0}]},{wall_time:new Date("2016-06-24T04:15:16.226Z"),step:309,bins:[{x:.0537,dx:.0054,y:0},{x:.0591,dx:.0054,y:.134},{x:.0645,dx:.0054,y:.8427},{x:.0698,dx:.0054,y:13.4305},{x:.0752,dx:.0054,y:25.0288},{x:.0805,dx:.0054,y:37.6034},{x:.0859,dx:.0054,y:60.7779},{x:.0913,dx:.0054,y:61.3028},{x:.0966,dx:.0054,y:61.5837},{x:.102,dx:.0054,y:57.9013},{x:.1073,dx:.0054,y:57.5244},{x:.1127,dx:.0054,y:46.6147},{x:.1181,dx:.0054,y:46.6147},{x:.1234,dx:.0054,y:13.9859},{x:.1288,dx:.0054,y:10.378},{x:.1341,dx:.0054,y:4.7394},{x:.1395,dx:.0054,y:.7862},{x:.1449,dx:.0054,y:.7516},{x:.1502,dx:.0054,y:0},{x:.1556,dx:.0054,y:0}]},{wall_time:new Date("2016-06-24T04:15:47.102Z"),step:377,bins:[{x:.0537,dx:.0054,y:0},{x:.0591,dx:.0054,y:.67},{x:.0645,dx:.0054,y:4.2133},{x:.0698,dx:.0054,y:17.9929},{x:.0752,dx:.0054,y:30.2753},{x:.0805,dx:.0054,y:39.6941},{x:.0859,dx:.0054,y:51.2814},{x:.0913,dx:.0054,y:57.993},{x:.0966,dx:.0054,y:61.5837},{x:.102,dx:.0054,y:56.9449},{x:.1073,dx:.0054,y:56.4756},{x:.1127,dx:.0054,y:44.712},{x:.1181,dx:.0054,y:44.712},{x:.1234,dx:.0054,y:15.3539},{x:.1288,dx:.0054,y:12.1077},{x:.1341,dx:.0054,y:5.2212},{x:.1395,dx:.0054,y:.3931},{x:.1449,dx:.0054,y:.3758},{x:.1502,dx:.0054,y:0},{x:.1556,dx:.0054,y:0}]},{wall_time:new Date("2016-06-24T04:16:13.835Z"),step:433,bins:[{x:.0537,dx:.0054,y:0},{x:.0591,dx:.0054,y:.9381},{x:.0645,dx:.0054,y:5.8986},{x:.0698,dx:.0054,y:14.3154},{x:.0752,dx:.0054,y:32.7152},{x:.0805,dx:.0054,y:43.8322},{x:.0859,dx:.0054,y:50.6483},{x:.0913,dx:.0054,y:56.6475},{x:.0966,dx:.0054,y:59.857},{x:.102,dx:.0054,y:59.1875},{x:.1073,dx:.0054,y:59.0805},{x:.1127,dx:.0054,y:43.285},{x:.1181,dx:.0054,y:43.285},{x:.1234,dx:.0054,y:14.0438},{x:.1288,dx:.0054,y:10.8105},{x:.1341,dx:.0054,y:4.6865},{x:.1395,dx:.0054,y:.3931},{x:.1449,dx:.0054,y:.3758},{x:.1502,dx:.0054,y:0},{x:.1556,dx:.0054,y:0}]},{wall_time:new Date("2016-06-24T04:16:18.632Z"),step:445,bins:[{x:.0537,dx:.0054,y:.2205},{x:.0591,dx:.0054,y:1.5836},{x:.0645,dx:.0054,y:5.056},{x:.0698,dx:.0054,y:18.0162},{x:.0752,dx:.0054,y:32.1331},{x:.0805,dx:.0054,y:41.2513},{x:.0859,dx:.0054,y:48.7489},{x:.0913,dx:.0054,y:57.1104},{x:.0966,dx:.0054,y:61.5837},{x:.102,dx:.0054,y:57.9013},{x:.1073,dx:.0054,y:57.5178},{x:.1127,dx:.0054,y:44.2364},{x:.1181,dx:.0054,y:44.2364},{x:.1234,dx:.0054,y:13.7491},{x:.1288,dx:.0054,y:10.378},{x:.1341,dx:.0054,y:4.5083},{x:.1395,dx:.0054,y:.3931},{x:.1449,dx:.0054,y:.3973},{x:.1502,dx:.0054,y:.4892},{x:.1556,dx:.0054,y:.4892}]},{wall_time:new Date("2016-06-24T04:16:36.297Z"),step:484,bins:[{x:.0537,dx:.0054,y:.441},{x:.0591,dx:.0054,y:3.3011},{x:.0645,dx:.0054,y:10.9546},{x:.0698,dx:.0054,y:13.7105},{x:.0752,dx:.0054,y:32.9245},{x:.0805,dx:.0054,y:43.1978},{x:.0859,dx:.0054,y:45.5834},{x:.0913,dx:.0054,y:55.2572},{x:.0966,dx:.0054,y:60.4326},{x:.102,dx:.0054,y:53.4983},{x:.1073,dx:.0054,y:52.8206},{x:.1127,dx:.0054,y:43.7607},{x:.1181,dx:.0054,y:43.7607},{x:.1234,dx:.0054,y:15.6486},{x:.1288,dx:.0054,y:12.5401},{x:.1341,dx:.0054,y:6.5549},{x:.1395,dx:.0054,y:2.3586},{x:.1449,dx:.0054,y:2.2763},{x:.1502,dx:.0054,y:.4892},{x:.1556,dx:.0054,y:.4892}]},{wall_time:new Date("2016-06-24T04:16:41.053Z"),step:496,bins:[{x:.0537,dx:.0054,y:.8819},{x:.0591,dx:.0054,y:4.5922},{x:.0645,dx:.0054,y:9.2693},{x:.0698,dx:.0054,y:14.4087},{x:.0752,dx:.0054,y:31.3218},{x:.0805,dx:.0054,y:41.9331},{x:.0859,dx:.0054,y:49.3821},{x:.0913,dx:.0054,y:53.5815},{x:.0966,dx:.0054,y:55.8282},{x:.102,dx:.0054,y:55.0152},{x:.1073,dx:.0054,y:54.901},{x:.1127,dx:.0054,y:41.3824},{x:.1181,dx:.0054,y:41.3824},{x:.1234,dx:.0054,y:18.1373},{x:.1288,dx:.0054,y:15.567},{x:.1341,dx:.0054,y:7.5713},{x:.1395,dx:.0054,y:1.9655},{x:.1449,dx:.0054,y:1.9005},{x:.1502,dx:.0054,y:.4892},{x:.1556,dx:.0054,y:.4892}]},{wall_time:new Date("2016-06-24T04:16:41.186Z"),step:497,bins:[{x:.0537,dx:.0054,y:.8819},{x:.0591,dx:.0054,y:4.4581},{x:.0645,dx:.0054,y:8.4266},{x:.0698,dx:.0054,y:15.1302},{x:.0752,dx:.0054,y:31.577},{x:.0805,dx:.0054,y:42.2256},{x:.0859,dx:.0054,y:50.6483},{x:.0913,dx:.0054,y:53.2729},{x:.0966,dx:.0054,y:54.6771},{x:.102,dx:.0054,y:53.4815},{x:.1073,dx:.0054,y:53.3397},{x:.1127,dx:.0054,y:42.8094},{x:.1181,dx:.0054,y:42.8094},{x:.1234,dx:.0054,y:18.6688},{x:.1288,dx:.0054,y:15.9995},{x:.1341,dx:.0054,y:7.5184},{x:.1395,dx:.0054,y:1.5724},{x:.1449,dx:.0054,y:1.5247},{x:.1502,dx:.0054,y:.4892},{x:.1556,dx:.0054,y:.4892}]},{wall_time:new Date("2016-06-24T04:16:49.690Z"),step:513,bins:[{x:.0537,dx:.0054,y:1.4385},{x:.0591,dx:.0054,y:3.8126},{x:.0645,dx:.0054,y:9.2693},{x:.0698,dx:.0054,y:15.8984},{x:.0752,dx:.0054,y:33.6899},{x:.0805,dx:.0054,y:44.0753},{x:.0859,dx:.0054,y:49.3821},{x:.0913,dx:.0054,y:51.3318},{x:.0966,dx:.0054,y:52.3749},{x:.102,dx:.0054,y:57.1094},{x:.1073,dx:.0054,y:57.5073},{x:.1127,dx:.0054,y:40.4311},{x:.1181,dx:.0054,y:40.4311},{x:.1234,dx:.0054,y:18.0426},{x:.1288,dx:.0054,y:15.567},{x:.1341,dx:.0054,y:6.878},{x:.1395,dx:.0054,y:.7862},{x:.1449,dx:.0054,y:.7731},{x:.1502,dx:.0054,y:.4892},{x:.1556,dx:.0054,y:.4892}]},{wall_time:new Date("2016-06-24T04:17:07.617Z"),step:551,bins:[{x:.0537,dx:.0054,y:.441},{x:.0591,dx:.0054,y:3.4351},{x:.0645,dx:.0054,y:11.7972},{x:.0698,dx:.0054,y:21.1823},{x:.0752,dx:.0054,y:30.8315},{x:.0805,dx:.0054,y:38.4273},{x:.0859,dx:.0054,y:48.1158},{x:.0913,dx:.0054,y:49.7656},{x:.0966,dx:.0054,y:50.6483},{x:.102,dx:.0054,y:56.0044},{x:.1073,dx:.0054,y:56.4716},{x:.1127,dx:.0054,y:43.285},{x:.1181,dx:.0054,y:43.285},{x:.1234,dx:.0054,y:19.1055},{x:.1288,dx:.0054,y:16.4319},{x:.1341,dx:.0054,y:7.4655},{x:.1395,dx:.0054,y:1.1793},{x:.1449,dx:.0054,y:1.1489},{x:.1502,dx:.0054,y:.4892},{x:.1556,dx:.0054,y:.4892}]},{wall_time:new Date("2016-06-24T04:17:17.407Z"),step:577,bins:[{x:.0537,dx:.0054,y:.6614},{x:.0591,dx:.0054,y:4.3487},{x:.0645,dx:.0054,y:12.6399},{x:.0698,dx:.0054,y:15.2469},{x:.0752,dx:.0054,y:32.5059},{x:.0805,dx:.0054,y:42.1267},{x:.0859,dx:.0054,y:45.5834},{x:.0913,dx:.0054,y:48.883},{x:.0966,dx:.0054,y:50.6483},{x:.102,dx:.0054,y:58.3955},{x:.1073,dx:.0054,y:59.0752},{x:.1127,dx:.0054,y:41.3824},{x:.1181,dx:.0054,y:41.3824},{x:.1234,dx:.0054,y:19.3054},{x:.1288,dx:.0054,y:16.8643},{x:.1341,dx:.0054,y:7.8748},{x:.1395,dx:.0054,y:1.5724},{x:.1449,dx:.0054,y:1.5032},{x:.1502,dx:.0054,y:0},{x:.1556,dx:.0054,y:0}]},{wall_time:new Date("2016-06-24T04:17:21.105Z"),step:581,bins:[{x:.0537,dx:.0054,y:.6614},{x:.0591,dx:.0054,y:4.4827},{x:.0645,dx:.0054,y:13.4826},{x:.0698,dx:.0054,y:15.2702},{x:.0752,dx:.0054,y:30.6481},{x:.0805,dx:.0054,y:40.862},{x:.0859,dx:.0054,y:49.3821},{x:.0913,dx:.0054,y:48.3322},{x:.0966,dx:.0054,y:47.7705},{x:.102,dx:.0054,y:58.6263},{x:.1073,dx:.0054,y:59.6023},{x:.1127,dx:.0054,y:43.285},{x:.1181,dx:.0054,y:43.285},{x:.1234,dx:.0054,y:18.3268},{x:.1288,dx:.0054,y:15.567},{x:.1341,dx:.0054,y:7.3402},{x:.1395,dx:.0054,y:1.5724},{x:.1449,dx:.0054,y:1.5032},{x:.1502,dx:.0054,y:0},{x:.1556,dx:.0054,y:0}]},{wall_time:new Date("2016-06-24T04:17:30.677Z"),step:602,bins:[{x:.0537,dx:.0054,y:.441},{x:.0591,dx:.0054,y:3.5692},{x:.0645,dx:.0054,y:12.6399},{x:.0698,dx:.0054,y:16.7365},{x:.0752,dx:.0054,y:31.1584},{x:.0805,dx:.0054,y:40.4233},{x:.0859,dx:.0054,y:47.4827},{x:.0913,dx:.0054,y:46.9203},{x:.0966,dx:.0054,y:46.6194},{x:.102,dx:.0054,y:57.0926},{x:.1073,dx:.0054,y:58.0436},{x:.1127,dx:.0054,y:45.6633},{x:.1181,dx:.0054,y:45.6633},{x:.1234,dx:.0054,y:18.5636},{x:.1288,dx:.0054,y:15.567},{x:.1341,dx:.0054,y:7.8024},{x:.1395,dx:.0054,y:2.3586},{x:.1449,dx:.0054,y:2.2763},{x:.1502,dx:.0054,y:.4892},{x:.1556,dx:.0054,y:.4892}]},{wall_time:new Date("2016-06-24T04:17:30.960Z"),step:604,bins:[{x:.0537,dx:.0054,y:.6614},{x:.0591,dx:.0054,y:4.0807},{x:.0645,dx:.0054,y:10.9546},{x:.0698,dx:.0054,y:17.4347},{x:.0752,dx:.0054,y:31.878},{x:.0805,dx:.0054,y:40.8126},{x:.0859,dx:.0054,y:46.8496},{x:.0913,dx:.0054,y:46.6997},{x:.0966,dx:.0054,y:46.6194},{x:.102,dx:.0054,y:57.0926},{x:.1073,dx:.0054,y:58.0423},{x:.1127,dx:.0054,y:45.1877},{x:.1181,dx:.0054,y:45.1877},{x:.1234,dx:.0054,y:18.5162},{x:.1288,dx:.0054,y:15.567},{x:.1341,dx:.0054,y:8.0335},{x:.1395,dx:.0054,y:2.7518},{x:.1449,dx:.0054,y:2.6521},{x:.1502,dx:.0054,y:.4892},{x:.1556,dx:.0054,y:.4892}]},{wall_time:new Date("2016-06-24T04:17:45.074Z"),step:637,bins:[{x:.0537,dx:.0054,y:1.1024},{x:.0591,dx:.0054,y:4.8356},{x:.0645,dx:.0054,y:5.8986},{x:.0698,dx:.0054,y:20.2741},{x:.0752,dx:.0054,y:34.292},{x:.0805,dx:.0054,y:41.5418},{x:.0859,dx:.0054,y:43.051},{x:.0913,dx:.0054,y:48.0004},{x:.0966,dx:.0054,y:50.6483},{x:.102,dx:.0054,y:56.0044},{x:.1073,dx:.0054,y:56.4862},{x:.1127,dx:.0054,y:48.5173},{x:.1181,dx:.0054,y:48.5173},{x:.1234,dx:.0054,y:15.7328},{x:.1288,dx:.0054,y:12.1077},{x:.1341,dx:.0054,y:6.6077},{x:.1395,dx:.0054,y:2.7518},{x:.1449,dx:.0054,y:2.6521},{x:.1502,dx:.0054,y:.4892},{x:.1556,dx:.0054,y:.4892}]},{wall_time:new Date("2016-06-24T04:18:17.117Z"),step:702,bins:[{x:.0537,dx:.0054,y:.8819},{x:.0591,dx:.0054,y:4.3241},{x:.0645,dx:.0054,y:7.5839},{x:.0698,dx:.0054,y:20.3208},{x:.0752,dx:.0054,y:36.1498},{x:.0805,dx:.0054,y:44.7076},{x:.0859,dx:.0054,y:47.4827},{x:.0913,dx:.0054,y:46.1704},{x:.0966,dx:.0054,y:45.4683},{x:.102,dx:.0054,y:50.2984},{x:.1073,dx:.0054,y:50.748},{x:.1127,dx:.0054,y:48.993},{x:.1181,dx:.0054,y:48.993},{x:.1234,dx:.0054,y:17.727},{x:.1288,dx:.0054,y:14.2698},{x:.1341,dx:.0054,y:7.961},{x:.1395,dx:.0054,y:3.538},{x:.1449,dx:.0054,y:3.4037},{x:.1502,dx:.0054,y:.4892},{x:.1556,dx:.0054,y:.4892}]},{wall_time:new Date("2016-06-24T04:18:21.750Z"),step:714,bins:[{x:.0537,dx:.0054,y:.8819},{x:.0591,dx:.0054,y:4.7262},{x:.0645,dx:.0054,y:10.1119},{x:.0698,dx:.0054,y:19.6459},{x:.0752,dx:.0054,y:35.4302},{x:.0805,dx:.0054,y:44.3183},{x:.0859,dx:.0054,y:48.1158},{x:.0913,dx:.0054,y:46.3911},{x:.0966,dx:.0054,y:45.4683},{x:.102,dx:.0054,y:50.2984},{x:.1073,dx:.0054,y:50.7374},{x:.1127,dx:.0054,y:45.1877},{x:.1181,dx:.0054,y:45.1877},{x:.1234,dx:.0054,y:19.6843},{x:.1288,dx:.0054,y:16.8643},{x:.1341,dx:.0054,y:9.0303},{x:.1395,dx:.0054,y:3.538},{x:.1449,dx:.0054,y:3.4037},{x:.1502,dx:.0054,y:.4892},{x:.1556,dx:.0054,y:.4892}]},{wall_time:new Date("2016-06-24T04:18:40.691Z"),step:758,bins:[{x:.0537,dx:.0054,y:1.2181},{x:.0591,dx:.0054,y:3.4351},{x:.0645,dx:.0054,y:11.7972},{x:.0698,dx:.0054,y:19.6926},{x:.0752,dx:.0054,y:34.0368},{x:.0805,dx:.0054,y:43.0042},{x:.0859,dx:.0054,y:49.3821},{x:.0913,dx:.0054,y:44.9576},{x:.0966,dx:.0054,y:42.5906},{x:.102,dx:.0054,y:52.9203},{x:.1073,dx:.0054,y:53.8615},{x:.1127,dx:.0054,y:42.8094},{x:.1181,dx:.0054,y:42.8094},{x:.1234,dx:.0054,y:21.005},{x:.1288,dx:.0054,y:18.594},{x:.1341,dx:.0054,y:9.5121},{x:.1395,dx:.0054,y:3.1449},{x:.1449,dx:.0054,y:3.0495},{x:.1502,dx:.0054,y:.9785},{x:.1556,dx:.0054,y:.9785}]},{wall_time:new Date("2016-06-24T04:18:44.566Z"),step:762,bins:[{x:.0537,dx:.0054,y:1.2181},{x:.0591,dx:.0054,y:3.5692},{x:.0645,dx:.0054,y:12.6399},{x:.0698,dx:.0054,y:18.9711},{x:.0752,dx:.0054,y:34.7106},{x:.0805,dx:.0054,y:43.929},{x:.0859,dx:.0054,y:48.7489},{x:.0913,dx:.0054,y:43.6121},{x:.0966,dx:.0054,y:40.8639},{x:.102,dx:.0054,y:53.25},{x:.1073,dx:.0054,y:54.3819},{x:.1127,dx:.0054,y:42.3337},{x:.1181,dx:.0054,y:42.3337},{x:.1234,dx:.0054,y:21.7363},{x:.1288,dx:.0054,y:19.4588},{x:.1341,dx:.0054,y:9.8685},{x:.1395,dx:.0054,y:3.1449},{x:.1449,dx:.0054,y:3.0495},{x:.1502,dx:.0054,y:.9785},{x:.1556,dx:.0054,y:.9785}]},{wall_time:new Date("2016-06-24T04:18:48.972Z"),step:771,bins:[{x:.0537,dx:.0054,y:1.4385},{x:.0591,dx:.0054,y:4.4827},{x:.0645,dx:.0054,y:13.4826},{x:.0698,dx:.0054,y:17.5047},{x:.0752,dx:.0054,y:34.2003},{x:.0805,dx:.0054,y:43.3441},{x:.0859,dx:.0054,y:46.2165},{x:.0913,dx:.0054,y:43.1044},{x:.0966,dx:.0054,y:41.4395},{x:.102,dx:.0054,y:52.8213},{x:.1073,dx:.0054,y:53.8641},{x:.1127,dx:.0054,y:43.7607},{x:.1181,dx:.0054,y:43.7607},{x:.1234,dx:.0054,y:22.2678},{x:.1288,dx:.0054,y:19.8912},{x:.1341,dx:.0054,y:10.0467},{x:.1395,dx:.0054,y:3.1449},{x:.1449,dx:.0054,y:3.0495},{x:.1502,dx:.0054,y:.9785},{x:.1556,dx:.0054,y:.9785}]},{wall_time:new Date("2016-06-24T04:19:18.102Z"),step:836,bins:[{x:.0537,dx:.0054,y:1.8795},{x:.0591,dx:.0054,y:6.4437},{x:.0645,dx:.0054,y:16.0105},{x:.0698,dx:.0054,y:18.3196},{x:.0752,dx:.0054,y:30.2753},{x:.0805,dx:.0054,y:39.2554},{x:.0859,dx:.0054,y:49.3821},{x:.0913,dx:.0054,y:44.5826},{x:.0966,dx:.0054,y:42.015},{x:.102,dx:.0054,y:53.349},{x:.1073,dx:.0054,y:54.3793},{x:.1127,dx:.0054,y:41.3824},{x:.1181,dx:.0054,y:41.3824},{x:.1234,dx:.0054,y:22.031},{x:.1288,dx:.0054,y:19.8912},{x:.1341,dx:.0054,y:10.0467},{x:.1395,dx:.0054,y:3.1449},{x:.1449,dx:.0054,y:3.071},{x:.1502,dx:.0054,y:1.4677},{x:.1556,dx:.0054,y:1.4677}]},{wall_time:new Date("2016-06-24T04:19:26.881Z"),step:854,bins:[{x:.0537,dx:.0054,y:1.8795},{x:.0591,dx:.0054,y:6.3097},{x:.0645,dx:.0054,y:15.1679},{x:.0698,dx:.0054,y:19.0411},{x:.0752,dx:.0054,y:29.1371},{x:.0805,dx:.0054,y:37.795},{x:.0859,dx:.0054,y:50.0152},{x:.0913,dx:.0054,y:45.1782},{x:.0966,dx:.0054,y:42.5906},{x:.102,dx:.0054,y:51.0074},{x:.1073,dx:.0054,y:51.781},{x:.1127,dx:.0054,y:45.1877},{x:.1181,dx:.0054,y:45.1877},{x:.1234,dx:.0054,y:20.8524},{x:.1288,dx:.0054,y:18.1616},{x:.1341,dx:.0054,y:9.796},{x:.1395,dx:.0054,y:3.9311},{x:.1449,dx:.0054,y:3.8226},{x:.1502,dx:.0054,y:1.4677},{x:.1556,dx:.0054,y:1.4677}]},{wall_time:new Date("2016-06-24T04:20:06.833Z"),step:947,bins:[{x:.0537,dx:.0054,y:3.6542},{x:.0591,dx:.0054,y:6.8212},{x:.0645,dx:.0054,y:13.4826},{x:.0698,dx:.0054,y:15.2702},{x:.0752,dx:.0054,y:32.0414},{x:.0805,dx:.0054,y:41.1524},{x:.0859,dx:.0054,y:43.6841},{x:.0913,dx:.0054,y:43.7216},{x:.0966,dx:.0054,y:43.7417},{x:.102,dx:.0054,y:46.8023},{x:.1073,dx:.0054,y:47.089},{x:.1127,dx:.0054,y:46.6147},{x:.1181,dx:.0054,y:46.6147},{x:.1234,dx:.0054,y:24.8881},{x:.1288,dx:.0054,y:22.4857},{x:.1341,dx:.0054,y:11.116},{x:.1395,dx:.0054,y:3.1449},{x:.1449,dx:.0054,y:3.0926},{x:.1502,dx:.0054,y:1.9569},{x:.1556,dx:.0054,y:1.9569}]},{wall_time:new Date("2016-06-24T04:20:20.058Z"),step:974,bins:[{x:.0537,dx:.0054,y:3.5385},{x:.0591,dx:.0054,y:9.0258},{x:.0645,dx:.0054,y:12.6399},{x:.0698,dx:.0054,y:17.4814},{x:.0752,dx:.0054,y:30.9491},{x:.0805,dx:.0054,y:39.7415},{x:.0859,dx:.0054,y:46.8496},{x:.0913,dx:.0054,y:42.9501},{x:.0966,dx:.0054,y:40.8639},{x:.102,dx:.0054,y:51.8154},{x:.1073,dx:.0054,y:52.8153},{x:.1127,dx:.0054,y:41.8581},{x:.1181,dx:.0054,y:41.8581},{x:.1234,dx:.0054,y:22.8571},{x:.1288,dx:.0054,y:20.7561},{x:.1341,dx:.0054,y:11.0964},{x:.1395,dx:.0054,y:4.3242},{x:.1449,dx:.0054,y:4.22},{x:.1502,dx:.0054,y:1.9569},{x:.1556,dx:.0054,y:1.9569}]},{wall_time:new Date("2016-06-24T04:20:29.637Z"),step:999,bins:[{x:.0537,dx:.0054,y:5.2083},{x:.0591,dx:.0054,y:6.5532},{x:.0645,dx:.0054,y:11.7972},{x:.0698,dx:.0054,y:18.9477},{x:.0752,dx:.0054,y:30.5305},{x:.0805,dx:.0054,y:39.1091},{x:.0859,dx:.0054,y:48.7489},{x:.0913,dx:.0054,y:39.4876},{x:.0966,dx:.0054,y:34.5329},{x:.102,dx:.0054,y:55.0967},{x:.1073,dx:.0054,y:57},{x:.1127,dx:.0054,y:45.6633},{x:.1181,dx:.0054,y:45.6633},{x:.1234,dx:.0054,y:18.5636},{x:.1288,dx:.0054,y:15.567},{x:.1341,dx:.0054,y:10.3444},{x:.1395,dx:.0054,y:6.6828},{x:.1449,dx:.0054,y:6.4532},{x:.1502,dx:.0054,y:1.4677},{x:.1556,dx:.0054,y:1.4677}]}];

        var data = [];

        // Max height in z axis.
        var Z_HEIGHT = 50;

        var minX = Infinity;
        var maxX = -Infinity;
        var minZ = Infinity;
        var maxZ = -Infinity;

        rawData.forEach(function (item) {
            var lineData = [];
            item.bins.forEach(function (bin) {
                minX = Math.min(minX, bin.x);
                maxX = Math.max(maxX, bin.x + bin.dx);
                minZ = Math.min(minZ, bin.y);
                maxZ = Math.max(maxZ, bin.y);
                lineData.push(bin.x + bin.dx / 2, item.step, bin.y);
            });
            data.push(lineData);
        });

        return {
            visualMap: {
                min: 0,
                max: 1000,
                dimension: 1,
                inRange: {
                    colorLightness: [0.4, 0.6]
                }
            },
            xAxis: {
                // min: minX - (maxX - minX) * 0.3,
                // max: maxX + (maxX - minX) * 0.3,
                min: minX,
                max: maxX,
                axisLine: {
                    onZero: false
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                position: 'right',
                inverse: true,
                splitLine: {
                    show: false
                }
            },
            grid: {
                top: Z_HEIGHT,
                bottom: 30
            },
            series: [{
                type: 'custom',
                dimensions: ['x', 'y'],
                labelLayout: {
                    hideOverlap: true
                },
                renderItem: function (params, api) {
                    var points = [];
                    for (var i = 0; i < data[params.dataIndex].length;) {
                        var x = api.value(i++);
                        var y = api.value(i++);
                        var z = api.value(i++);

                        var pt = api.coord([x, y]);
                        // Linear map in z axis
                        pt[1] -= (z - minZ) / (maxZ - minZ) * Z_HEIGHT;
                        points.push(pt);
                    }
                    return {
                        type: 'polygon',
                        shape: {
                            points: points,
                        },
                        textContent: {
                            style: {
                                text: new Intl.DateTimeFormat('en-US', {
                                    year: '2-digit', month: '2-digit', day: '2-digit',
                                    hour: 'numeric', minute: 'numeric', second: 'numeric'
                                }).format(new Date(rawData[params.dataIndex].wall_time)),
                                align: 'left',
                                verticalAlign: 'bottom'
                            },
                            x: points[0][0],
                            y: points[0][1],
                        },
                        textConfig: {
                            position: null
                        },
                        style: api.style({
                            stroke: '#005',
                            lineWidth: 1
                        })
                    }
                },
                data: data
            }]
        };
    })()
];