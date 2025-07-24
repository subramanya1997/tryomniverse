-- Initial seed data for TryOmniverse e-commerce AI agent platform

-- Insert initial agent types
INSERT INTO agent_types (id, name, description, category, created_at) VALUES
  ('inventory_agent', 'Inventory Agent', 'Monitor stock levels, predict demand, automate reordering', 'product_management', NOW()),
  ('pricing_agent', 'Pricing Agent', 'Dynamic pricing optimization based on market conditions', 'product_management', NOW()),
  ('catalog_agent', 'Catalog Agent', 'Product description generation, SEO optimization', 'product_management', NOW()),
  ('support_agent', 'Support Agent', 'Handle customer inquiries, order tracking, returns', 'customer_service', NOW()),
  ('sentiment_agent', 'Sentiment Agent', 'Analyze customer feedback and reviews', 'customer_service', NOW()),
  ('campaign_agent', 'Campaign Agent', 'Create and optimize marketing campaigns', 'marketing', NOW()),
  ('social_agent', 'Social Media Agent', 'Manage social media presence and engagement', 'marketing', NOW()),
  ('email_agent', 'Email Agent', 'Personalized email marketing automation', 'marketing', NOW()),
  ('sales_agent', 'Sales Agent', 'Generate sales reports and insights', 'analytics', NOW()),
  ('trend_agent', 'Trend Agent', 'Identify market trends and opportunities', 'analytics', NOW());

-- Insert default integration types
INSERT INTO integration_types (id, name, description, category, api_docs_url, created_at) VALUES
  ('shopify', 'Shopify', 'Connect to Shopify stores for product and order management', 'marketplace', 'https://shopify.dev/docs', NOW()),
  ('amazon', 'Amazon', 'Amazon Seller Central integration', 'marketplace', 'https://developer.amazonservices.com/', NOW()),
  ('ebay', 'eBay', 'eBay seller integration', 'marketplace', 'https://developer.ebay.com/', NOW()),
  ('stripe', 'Stripe', 'Payment processing integration', 'payment', 'https://stripe.com/docs', NOW()),
  ('paypal', 'PayPal', 'PayPal payment integration', 'payment', 'https://developer.paypal.com/', NOW()),
  ('mailchimp', 'Mailchimp', 'Email marketing integration', 'marketing', 'https://mailchimp.com/developer/', NOW()),
  ('klaviyo', 'Klaviyo', 'Advanced email marketing and automation', 'marketing', 'https://developers.klaviyo.com/', NOW()),
  ('facebook', 'Facebook', 'Facebook Ads and social media integration', 'social', 'https://developers.facebook.com/', NOW()),
  ('google_analytics', 'Google Analytics', 'Website analytics integration', 'analytics', 'https://developers.google.com/analytics', NOW());

-- Insert sample workflow templates
INSERT INTO workflow_templates (id, name, description, trigger_type, steps, created_at) VALUES
  ('low_stock_alert', 'Low Stock Alert', 'Automatically handle low stock situations', 'event', 
   '[
     {"type": "check_inventory", "agent": "inventory_agent"},
     {"type": "analyze_demand", "agent": "inventory_agent"},
     {"type": "create_reorder", "agent": "inventory_agent"},
     {"type": "notify_manager", "agent": "support_agent"}
   ]'::jsonb, NOW()),
  ('price_optimization', 'Price Optimization', 'Daily price optimization based on market conditions', 'schedule',
   '[
     {"type": "analyze_competitors", "agent": "pricing_agent"},
     {"type": "check_inventory_levels", "agent": "inventory_agent"},
     {"type": "calculate_optimal_price", "agent": "pricing_agent"},
     {"type": "update_product_prices", "agent": "pricing_agent"}
   ]'::jsonb, NOW()),
  ('customer_inquiry_response', 'Customer Inquiry Response', 'Automated customer service workflow', 'event',
   '[
     {"type": "analyze_inquiry", "agent": "support_agent"},
     {"type": "check_order_status", "agent": "support_agent"},
     {"type": "generate_response", "agent": "support_agent"},
     {"type": "escalate_if_needed", "agent": "support_agent"}
   ]'::jsonb, NOW());

-- Insert sample business metrics
INSERT INTO business_metrics (name, description, calculation_type, target_value, created_at) VALUES
  ('Monthly Revenue', 'Total monthly revenue across all channels', 'sum', 50000.00, NOW()),
  ('Average Order Value', 'Average value of orders', 'average', 75.00, NOW()),
  ('Customer Acquisition Cost', 'Cost to acquire a new customer', 'calculated', 25.00, NOW()),
  ('Inventory Turnover', 'How quickly inventory is sold', 'ratio', 6.0, NOW()),
  ('Customer Satisfaction Score', 'Average customer satisfaction rating', 'average', 4.5, NOW()),
  ('Social Media Engagement Rate', 'Engagement rate on social media posts', 'percentage', 3.5, NOW());

-- Create a demo store for testing
INSERT INTO stores (id, name, description, store_type, settings, created_at) VALUES
  (gen_random_uuid(), 'Demo Electronics Store', 'Sample electronics e-commerce store for testing', 'shopify', 
   '{
     "currency": "USD",
     "timezone": "America/New_York",
     "default_agent_settings": {
       "response_time": "fast",
       "escalation_threshold": 0.7
     }
   }'::jsonb, NOW());

-- Add some sample products for the demo store
WITH demo_store AS (SELECT id FROM stores WHERE name = 'Demo Electronics Store' LIMIT 1)
INSERT INTO products (id, store_id, name, description, price, sku, inventory_count, category, created_at)
SELECT 
  gen_random_uuid(),
  demo_store.id,
  product_data.name,
  product_data.description,
  product_data.price,
  product_data.sku,
  product_data.inventory_count,
  product_data.category,
  NOW()
FROM demo_store,
(VALUES
  ('iPhone 15 Pro', 'Latest iPhone with advanced camera system', 999.00, 'IPHONE15PRO', 25, 'smartphones'),
  ('MacBook Air M3', 'Powerful laptop with M3 chip', 1299.00, 'MACBOOKAIR-M3', 15, 'laptops'),
  ('AirPods Pro', 'Premium wireless earbuds with noise cancellation', 249.00, 'AIRPODS-PRO', 50, 'audio'),
  ('iPad Air', 'Versatile tablet for work and creativity', 599.00, 'IPAD-AIR', 30, 'tablets'),
  ('Apple Watch Series 9', 'Advanced smartwatch with health features', 399.00, 'WATCH-S9', 40, 'wearables')
) AS product_data(name, description, price, sku, inventory_count, category); 