import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const {incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
    }, [getIncomes])
    return (
        <IncomeStyled>
            <InnerLayout>
                <div className="income-header">
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income: <span>${totalIncome(incomes)}</span></h2>
                </div>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, type} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 1px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 0.7rem;
        margin: 1rem 0;
        font-size: 1.3rem;
        gap: 0.5rem;
        span{
            font-size: 1.3rem;
            font-weight: 500;
            color: var(--color-green);
        }
    }
    .income-header {  /* Styles for new container */
    display: flex;
    justify-content: space-between; /* Align title and total income */
    align-items: center;
    margin-bottom: 1rem;  /* Add some margin for separation */
    
  }
 
    .income-content{
        display: flex;
        gap: 1.5rem;
        .incomes{
            flex: 1;
        }
    }
`;

export default Income