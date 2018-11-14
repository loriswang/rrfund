<template>
    <div class="table-wrapper">
        <el-table :data="tableData.filter(data => !search || data.number.toLowerCase().includes(search.toLowerCase()))"
                  style="width: 100%"
                  :cell-style="tableCellStyle"
                  :row-style="tableRowStyle"
                  :header-cell-style="tableHeaderColor"
                  :cell-mouse-enter="tableMouseEnter">
            <el-table-column label="文字 显示"
                             :render-header="renderHeader">
                <el-table-column label="基金代码"
                                 prop="number">
                </el-table-column>
                <el-table-column label="基金名称"
                                 prop="name">
                </el-table-column>
                <el-table-column label="日期"
                                 prop="date">
                </el-table-column>
                <el-table-column label="基金净值"
                                 prop="val">
                </el-table-column>
            </el-table-column>
            <el-table-column align="right"
                             max-width="300">
                <template slot="header"
                          slot-scope="slot">
                    <el-input v-model="search"
                              size="mini"
                              placeholder="请输入基金代码"/>
                </template>

                <el-table-column width="100"
                                 label="单位净值日增长率"
                                 prop="percent">
                </el-table-column>
                <el-table-column width="100"
                                 label="单位净值累计增长率"
                                 prop="addPercent">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini"
                                   @click="handleEdit(scope.$index, scope.row)">
                            详情
                        </el-button>
                    </template>
                </el-table-column>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tableData: [{
                    number: '000789',
                    name: '量化1号量化1号量化1号量化1号量化1号量化1号量化1号量化1号量化1号',
                    date: '2016-05-02',
                    val: '1.7143',
                    percent: '-5.4',
                    addPercent: '+2.45',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    number: '000800',
                    name: '量化2号',
                    date: '2016-05-04',
                    val: '0.81',
                    percent: '+6.4',
                    addPercent: '-3.77',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    number: '000801',
                    name: '量化3号',
                    date: '2016-05-01',
                    val: '2.556',
                    percent: '+0.3',
                    addPercent: '+0.86',
                    address: '上海市普陀区金沙江路 1519 弄'
                }],
                search: ''
            }
        },
        methods: {
//            定义涨跌颜色
//            渲染五角星
            renderHeader (createElement, {column, _self}) {
                return createElement(
                    'div',
                    {
                        'class': 'flo-left'
                    },
                    [
                        createElement('span', {
                                attrs: {class: 'tip-text'}
                            }, ['基金评级: ']
                        ),
                        createElement('i', {
                                attrs: {class: 'iconfont icon-star yellow-star'}
                            }
                        ),
                        createElement('i', {
                                attrs: {class: 'iconfont icon-star yellow-star'}
                            }
                        ),
                        createElement('i', {
                                attrs: {class: 'iconfont icon-star yellow-star'}
                            }
                        ),
                        createElement('i', {
                                attrs: {class: 'iconfont icon-star yellow-star'}
                            }
                        ),
                        createElement('i', {
                                attrs: {class: 'iconfont icon-star yellow-star'}
                            }
                        )
                    ]
                )
            },
            tableCellStyle ({row, column, rowIndex, columnIndex}) {
                return 'text-align: center;border: 1px solid #122a65;color: #fff;'
            },
            // 修改table tr行的背景色
            tableRowStyle ({row, rowIndex}) {
                return 'background-color: #122a65;border: 1px solid #122a65;'
            },
            // 修改table header的背景色
            tableHeaderColor ({row, column, rowIndex, columnIndex}) {
                if (rowIndex === 0 || rowIndex === 1) {
                    return 'background-color: #122a65;color: #fff;font-weight: 500;border: 1px solid #122a65;text-align:center;'
                }
            },
            tableMouseEnter ({row, column, cell, event}) {
                console.log(row)
                return 'background-color: #122a65 !important;'
            },
            handleEdit (index, row) {
                console.log(index + '|' + row.number)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .table-wrapper
        width: 100rem
        margin: 14rem auto 5.2rem
</style>
