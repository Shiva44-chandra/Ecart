const express = require('express');
const { getAllproducts,
    createProduct, 
    updateProduct, 
    deleteProduct,
    getProductDetails,
    createProductReview,
    getProductReviews, 
    deleteReview,
    getAdminProducts,
     } = require('../controllers/productcontroller');
const {isAuthenticatedUser,authorizeRoles} = require('../middleware/auth');
const router = express.Router();


router.route("/products").get(getAllproducts);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);



router.route("/admin/product/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);


router.route("/admin/product/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct);

router.route("/admin/product/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct);

router.route("/product/:id").get(isAuthenticatedUser,getProductDetails);

router.route("/review").put(isAuthenticatedUser,createProductReview);

router.route("/reviews").get(getProductReviews);
router.route("/reviews").delete(isAuthenticatedUser,deleteReview);

module.exports = router;