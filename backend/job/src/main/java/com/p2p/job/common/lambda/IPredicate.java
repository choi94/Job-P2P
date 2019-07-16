package com.p2p.job.common.lambda;

/**
 * IPredicate
 */
@FunctionalInterface
public interface IPredicate {
    public abstract boolean test(Object o);
    
}