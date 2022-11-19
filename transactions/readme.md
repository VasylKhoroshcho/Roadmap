# Atomicity
Atomicity means the entire transaction must complete. If this is not the case, the entire transaction is aborted. This ensures that the database can never be left with partially completed transactions, which lead to poor data integrity. If you remove money out of one bank account, for example, but the second request fails and the system cannot place the money in another bank, both requests must fail. The money cannot simply be lost, or taken from one account without going into the other.

# Consistency
Consistency refers to the state the data is in when certain conditions are met. For example, one rule may be that each invoice must relate to a customer in the customer table. These rules may be broken during the course of a transaction if, for example the invoice is inserted without a related customer, which is added at a later stage in the transaction. These temporary violations are not visible outside of the transaction, and will always be resolved by the time the transaction is complete.
# Isolation
Isolation means that any data being used during the processing of one transaction cannot be used by another transaction until the first transaction is complete. For example, if two people deposit $100 into another account with a balance of $900, the first transaction must add $100 to $900, and the second must add $100 to $1000. If the second transaction reads the $900 before the first transaction has completed, both transactions will seem to succeed, but $100 will have gone missing. The second transaction must wait until it alone is accessing the data.

# Durability
Durability refers to the fact that once data from a transaction has been committed, its effects will remain, even after a system failure. While a transaction is under way, the effects are not persistent. If the database crashes, backups will always restore it to a consistent state prior to the transaction commencing. Nothing a transaction does should be able to change this fact
