SELECT SUM(customer_gift_purchases.retail_price) FROM customer_gift_purchases 
JOIN gifts LEFT JOIN gift_categories ON customer_gift_purchases.gift_id = gifts.gift_id 
AND gifts.gift_category_id = gift_categories.gift_category_id 
WHERE customer_gift_purchases.customer_id = 5 AND gift_categories.name = 'read';
