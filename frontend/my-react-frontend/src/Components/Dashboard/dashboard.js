import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/layouts';
import { dollar } from '../../utils/icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
              <div className="transation-header">
                <h1>All Transactions</h1>
                </div>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h3 className="salary-title">Min <span>Salary</span>Max</h3>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h3 className="salary-title">Min <span>Expense</span>Max</h3>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.8rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 300px;
            .amount-con{
                display: flex;
                
                grid-template-columns: repeat(4, 1fr);
                gap: 0.9rem;
                margin-top: 0.4rem;
                h2{
                  font-size: 1.4rem;
                  
                }
                .income, .expense .balance{
                    grid-column: span 1;
                }
                .income, .expense, .balance{
                  
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 0.7rem;
                    
                    
                    
                    p{
                        font-size: 1.4rem;
                        font-weight: 100;
                        align-items: center;
                        
                    }
               
                }
                .income, .expense {
                    grid-column: span 1 ;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .balance{
                    grid-column: span 1 ;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 1.5rem;
                    }
                }
            }

        }

      

        .history-con{
            grid-column: 4 / -1;
            margin-top: -3rem;
            h2{
              margin: 0.3rem 0;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-left: 5rem;
          }
            h3{
                margin: 0.3rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-left: auto;
            }
            .salary-title{
                font-size: 1rem;
                span{
                    font-size: 1.6rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 0.7rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 400;
                    font-size: 1.3rem;
                }
            }
        }
    }
`;

export default Dashboard